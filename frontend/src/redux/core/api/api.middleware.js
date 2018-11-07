'use strict';
import { isEmpty, get } from 'lodash';
import qs from 'qs';
import store from 'store';
import axios from 'axios';

import config from '../../../config';
import { apiError, apiSuccess } from './api.middleware.actions';
import * as AT from '../../actionTypes';
import { userLogOut } from '../../feature/auth/auth.actions';

const _getToken = () => store.get('token');

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  next(action);

  if (action.type.includes(AT.API_REQUEST)) {
    const { url, feature, sourceAction, force } = action.meta;
    const method = action.meta.method.toLowerCase();
    const data = action.payload;

    const storeKey = `${url}_${feature}_${JSON.stringify(data)}`;

    const { serverURL } = config;
    const options = {
      method: method,
      url: `${serverURL}/${url}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${_getToken()}`,
      },
    };

    if (method !== 'get' && data) {
      options.data = data;
    }

    if (method === 'get' && data && !isEmpty(data)) {
      options.url = `${apiURL}/${url}?${qs.stringify(data)}`;
    }

    //reading from cache
    const dataFromStore = store.get(storeKey);
    if (!force && storeKey && dataFromStore) {
      dispatch(apiSuccess(dataFromStore));
      return;
    }

    axios(options)
      .then(res => {
        const response = { res, feature, sourceAction, meta: action.meta };

        store.set(storeKey, response);
        dispatch(apiSuccess(response));
      })
      .catch(err => {
        const error = { ...err.response, message: get(err, 'response.data.message') || 'Error' };
        const errorArr = [];

        if (error.status === 401 && store.get('token')) {
          errorArr.push(userLogOut({ state: true }));
        } else {
          apiError({ error, feature, sourceAction, meta: action.meta });
        }
        dispatch(errorArr);
      })
      .finally(() => {
      });
  }
};