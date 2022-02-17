import http from '../http/index'
const api = {}
api.login = (params) => http.post('/login', params)
export default api
