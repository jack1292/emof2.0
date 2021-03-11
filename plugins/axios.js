"use strict";

// import Vue from 'vue';
import axios from "axios";
import router from '@/router/index'
import {Notification, MessageBox} from 'element-ui'
import {ONLINEHOST, QAHOST} from '@/config'
import store from '../store'
import Qs from 'qs';

// Full config:  https://github.com/axios/axios#request-config
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? ONLINEHOST : QAHOST
// axios.defaults.headers.common['token'] = '';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || "",
  timeout: 60 * 1000, // Timeout
  // withCredentials: false, // Check cross-site Access-Control
};
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  response => {
    if(response.config.responseType === 'blob'){
      return response
    }
    if (response.data.code >=1000 && response.data.code<2000) {
      return response.data
    } else if (response.data.code <1000) {
      MessageBox.confirm(
        '登录状态已过期，请您重新登录',
        '系统提示', {
          confirmButtonText: '重新登录',
          type: 'warning',
          showClose: false,
          showCancelButton: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          router.push('/login')
          setTimeout(()=>{
            location.reload() // 为了重新实例化vue-router对象 避免bug
          },200)

        })
      })
    } else {
      Notification.error({
        title: response.data.msg,
        duration: 2500
      })
      return
    }
  },
  error => {
    let code = 0
    try {
      code = error.response.data.status
    } catch (e) {
      if (error.toString().indexOf('Error: timeout') !== -1) {
        // Notification.error({
        //   title: '网络请求超时',
        //   duration: 2500
        // })
        return Promise.reject(error)
      }
      if (error.toString().indexOf('Error: Network Error') !== -1) {
        Notification.error({
          title: '网络请求错误',
          duration: 2500
        })
        return Promise.reject(error)
      }
    }
    if (code === 5000) {
      MessageBox.confirm(
        '登录状态已过期，请您重新登录',
        '系统提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).then(() => {
        store.dispatch('LogOut').then(() => {
          location.reload() // 为了重新实例化vue-router对象 避免bug
        })
      })
    }
    return Promise.reject(error)
  }
);

// Plugin.install = function(Vue, options) {
//   Vue.axios = _axios;
//   window.axios = _axios;
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return _axios;
//       }
//     },
//     $axios: {
//       get() {
//         return _axios;
//       }
//     },
//   });
// };
//
// Vue.use(Plugin)
//
// export default Plugin;


// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    _axios.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    _axios.post(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}


/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function postfile(url, params) {
  return new Promise((resolve, reject) => {
    _axios.post(url, params,{responseType:'blob'})
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}


/**
 * post方法，参数序列化
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function qspost(url, params) {
  return new Promise((resolve, reject) => {
    _axios.post(url, Qs.stringify(params))
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}


/**
 * put方法，对应put请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function put(url, params) {
  return new Promise((resolve, reject) => {
    _axios.put(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}


/**
 * delete
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function deletefn(url, params) {
  return new Promise((resolve, reject) => {
    _axios.delete(url, params)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  });
}