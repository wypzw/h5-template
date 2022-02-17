import Cookies from 'js-cookie'
const TokenKey = 'x-auth-token'

const token = {}
token.getToken = ()=>{
    return Cookies.get(TokenKey)
}
token.setToken = (tokenVal)=>{
    return Cookies.set(TokenKey, tokenVal)
}
token.removeToken = ()=>{
    return Cookies.remove(TokenKey)
}
export default token
