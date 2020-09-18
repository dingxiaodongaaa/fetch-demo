import fetchAPI from "./fetch.js"
const baseURL = "."
const {GET, POST} = fetchAPI(baseURL) // 接收一个参数，配置全局的baseURL

GET("/data.json").then(res => {
    console.log(res)
})