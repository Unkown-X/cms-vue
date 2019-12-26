import axios from 'axios'
import router from '../router'
import port from './port.js'
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
axios.defaults.timeout = 30000;
//http request 拦截器
axios.interceptors.request.use(
    config => {
        // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
        config.data = JSON.stringify(config.data);
        config.headers = {
            'Content-Type': 'application/json'
        }
        // if(token){
        //   config.params = {'token':token}
        // }

        return config;
    },
    error => {
        return Promise.reject(err);
    }
);


//http response 拦截器
axios.interceptors.response.use(
    response => {
        let token = sessionStorage.getItem('token');
        if (response.data.errCode == 103 || response.data.errCode == 104) {
            if (!sessionStorage.getItem('mobile')) {
                router.push({
                    path: "login"
                })
            }

        }
        // console.log('lanjie')
        return response;
    },
    error => {
        return Promise.reject(error)
    }
)
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function fetch(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios.get(port + url, {
            params: params
        }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                console.log({ 'url': url, 'params': params, 'result': response })
                // if (response.data.code == '40512') {
                //     router.push({
                //         path: "/home",

                //     })
                // }
                resolve(response.data);
            })
            .catch(err => {
                reject(err)
            })
    })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}) {
    // console.log(data,typeof(data))
    return new Promise((resolve, reject) => {
        axios.post(port + url, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                // console.log({'url':url,'params':data,'result':response})
                resolve(response.data);
            }, err => {
                reject(err)
            })
    })
}

