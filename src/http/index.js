import axios from 'axios'
import qs from 'qs'
import token from '../common/js/token'
import baseUrl from '../baseUrl/index'
import { Dialog } from 'vant';
axios.defaults.baseURL = baseUrl
const http = {}
http.get = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.get(url, {params: params}).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
            console.log(err)
        })
    })
}
http.post = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.post(url, params, {
            headers: {
            }
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.postFormData = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.post(url, params, {
            transformRequest: [
                function(oldData){
                    // console.log(oldData)
                    let newStr = ''
                    for (let item in oldData){
                        newStr += encodeURIComponent(item) + '=' + encodeURIComponent(oldData[item]) + '&'
                    }
                    newStr = newStr.slice(0, -1)
                    return newStr
                }
            ],
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.put = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        params = qs.stringify(params)
        axios.put(url, params).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.putJson = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.put(url, params, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
http.delete = (url, params = {})=>{
    return new Promise((resolve, reject)=>{
        axios.delete(url, {params: params}, {
            headers: {
                'Content-type': 'application/json'
            }
        }).then(res=>{
            resolve(res.data)
        }).catch(err=>{
            reject(err)
        })
    })
}
axios.interceptors.request.use(
    config => {
        // if (token.getToken()) {
        //    axios.defaults.headers.common['x-auth-token'] = token.getToken()
        //     config.headers={
        //         'x-auth-token':token.getToken()
        //     }
        // } 
        if ( window.auditJavascriptInterface.getToken()){
            axios.defaults.headers.common['x-auth-token'] =  window.auditJavascriptInterface.getToken()
            config.headers={
                'x-auth-token': window.auditJavascriptInterface.getToken()
            }
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use(
    response => {
        return response
    }, error => { 
        console.log('err' + error)
        Dialog.alert({
            title: 'error',
            message: '后端错误'
        }).then(() => {
            // on close
        });
        return Promise.reject(error)
    }
)
export default http
