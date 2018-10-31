import BASE from './base';
import DEVELOPMENT from './development';
import PRODUCTION from './production';

const getConfig = () => {
  if (process.env.NODE_ENV === 'production') {
    return { ...BASE, ...PRODUCTION };
  } else {
    return { ...BASE, ...DEVELOPMENT };
  }
};

export default getConfig();