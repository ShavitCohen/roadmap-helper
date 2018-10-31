'use strict';
import { isEmpty, get, last } from 'lodash';
import qs from 'qs';
import store from 'store';
import axios from 'axios';

import { setLoader } from '../../../../../../../our-lifestyle-app/src/redux/core/ui/ui.actions';
import config from '../../../../../../../our-lifestyle-app/src/conf/index';
import { apiError, apiSuccess } from './api.middleware.actions';
import * as AT from '../../../../../../../our-lifestyle-app/src/redux/actionTypes';
import { setNotification } from '../../../../../../../our-lifestyle-app/src/redux/core/notifications/notifications.middleware.actions';
import { userLogOut } from '../../../../../../../our-lifestyle-app/src/redux/feature/auth/auth.actions';

const _getToken = (token) => store.get(token);

export const apiMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  next(action);

  if (action.type.includes(AT.API_REQUEST)) {
    const { url, feature, sourceAction, onSuccess, onError } = action.meta;
    const method = action.meta.method.toLowerCase();
    const data = action.payload;

    const { apiURL } = config;
    const options = {
      method: method,
      url: `${apiURL}/${url}`,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${_getToken('token')}`,
      },
    };

    if (method !== 'get' && data) {
      options.data = data;
    }

    if (method === 'get' && data && !isEmpty(data)) {
      options.url = `${apiURL}/${url}?${qs.stringify(data)}`;
    }
    setLoader({ state: true, feature: action.meta.feature });
    axios(options)
      .then(res => {
        const successArr = [apiSuccess({ res, feature, sourceAction, meta: action.meta })];
        if (onSuccess) {
          successArr.push(setNotification({
            feature,
            severity: onSuccess.severity || 'success',
            title: onSuccess.title,
            text: onSuccess.text,
            intlType: onSuccess.relationshipType,
          }));
        }
        dispatch(successArr);
      })
      .catch(err => {
        const error = { ...err.response, message: get(err, 'response.data.message') || 'Error' };
        const errorArr = [];

        if (error.status === 401 && store.get('token')) {
          const backToRoute = last(window.location.href.split('#'));
          store.set('backToRoute', backToRoute);
          errorArr.push(userLogOut({ state: true }));
        } else {
          apiError({ error, feature, sourceAction, meta: action.meta });
          if (onError) {
            errorArr.push(setNotification({
              feature,
              severity: onError.severity || 'error',
              title: onError.title,
              text: onError.text,
              intlType: onError.relationshipType,
            }));
          }
        }

        dispatch(errorArr);
      })
      .finally(() => {
        dispatch(setLoader({ state: false, feature: action.meta.feature }));
      });
  }
};