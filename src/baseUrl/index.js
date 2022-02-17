let baseUrl= "";
switch (process.env.NODE_ENV) {
    case 'development':
        baseUrl = "http://127.0.0.1"  //开发环境url
        break;
    case 'production':
        baseUrl = "http://127.0.0.1"  //线上url
        break;
}
export default baseUrl;