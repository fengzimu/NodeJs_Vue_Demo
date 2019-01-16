const Mock = require('mockjs') // 获取mock对象
const Random = Mock.Random // 获取random对象，随机生成各种数据，具体请翻阅文档
// const domain = 'http://localhost:8080/api' // 定义默认域名，随便写
const code = 200 // 返回的状态码

// 随机生成文章数据
const postData = req => {
  
    console.log(req) // 请求体，用于获取参数

    let user = {
        "id": "1",
        "name": "Liyan Dong",
        "email": "liyan.dong01@sap.com",
        "position": "Developer",
        "salary": "$900",
        "start_date": "2010/10/14",
        "office": "Tokyo",
        "extn": "6200",
        "photo": "./assets/img/user8-128x128.jpg"
    }

    // 返回状态码和文章数据posts
    return {
        code,
        user
    }
}
  
// 定义请求链接，类型，还有返回数据
Mock.mock('/user', 'get', postData);