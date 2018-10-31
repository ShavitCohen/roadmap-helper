export const loggerMiddleware = ({ getState }) => (next) => (action) => {
  const { NODE_ENV } = process.env;

  if (NODE_ENV === 'development' && !action.type.includes('@@')) {
    const { meta, payload } = action;
    switch (true) {
      case action.type.includes('SET_'): {
        console.group(`${action.type}`);
        console.log({ payload, meta });
        console.group('CURRENT STATE:');
        console.log(getState());
        console.groupEnd();

        next(action);

        console.group('NEXT STATE: ');
        console.log(getState());
        console.groupEnd();

        console.groupEnd();
      }
        break;
      default: {
        console.group(`${action.type}`);
        console.log({ payload, meta });
        console.groupEnd();
        next(action);
      }

    }
  } else {
    next(action);
  }
};