const value = {
  host: 'http://applan.minfo.im/', 
}

const AppConfig = {
  get: (params) => {
    return value[params];
  }, 
  set: (params, data) => {
    value[params] = data;
  }
}

export default AppConfig;