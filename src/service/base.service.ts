import fetch from 'axios';

interface BaseConfig {
  baseURL: string;
}

const baseConfig: BaseConfig = {
  baseURL: process.env.REACT_APP_API_URL as string
};

export const createInstance = (baseConfig: BaseConfig) => {
  const instance = fetch.create(baseConfig);
  instance.defaults.headers.common['Content-Type'] = 'application/json';
  return instance;
};

const instance = createInstance(baseConfig);

// eslint-disable-next-line
export default {
  service() {
    return instance;
  }
};
