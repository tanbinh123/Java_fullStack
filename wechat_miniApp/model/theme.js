//业务对象
//theme, banner, spu, sku, address, user
import { Http } from "../utils/http";

class Theme {
    static getHomeLocationA(callback) {
        Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            },
            callback: data => {
                callback(data)
            }
        });
    }
}

export {
    Theme
}