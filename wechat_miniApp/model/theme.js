//业务对象
//theme, banner, spu, sku, address, user
import { Http } from "../utils/http";
import { promisic } from "../utils/util";

class Theme {
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        });

        //也可以这么写：
        // return await promisic(Http.request)({
        //     url: `theme/by/names`,
        //     data: {
        //         names: 't-1'
        //     }
        // });

    }
}

export {
    Theme
}