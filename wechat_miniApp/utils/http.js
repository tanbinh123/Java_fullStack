import { config } from "../config/config";
import { promisic } from "./util";
class Http {
    static async request({ url, data, method = 'GET' }) {
        //wx.request
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
            //这里用 promisic API 封装成 promise, 就不需要success() 函数

            // , success(res) {
            //     callback(res.data);
            // }
        })
        return res.data
    }
}

//wx.request, 把它当作参数传进来，不能加(), 否则是调用
// promisic(wx.request)({
//     url: '',
//     data: data,

// })
//这里把一个函数传递进另一个函数
//动态类型 非常常见， python


export {
    Http
}