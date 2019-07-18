import request from 'request'
import cheerio from 'cheerio'
import fs from 'fs';
import config from './config';


export default class api {
    public static setReq(path: string): void {
        request(config.PATH
        , (error, response, body) => {
            console.log(error)
            console.log(response.statusCode)
            if (!error && response.statusCode == 200) {
                api.saveInfo(body, path)

            }
        })
    }
    public static saveInfo(data: any, path: string): void {
        let doc = cheerio.load(data)
        // console.log(doc)

        // let node_a = doc("a").html()
        // let node_ul = doc("ul").html()
        // console.log(node_a);
        // console.log(node_ul);
        console.log('获取成功');
        fs.writeFile('./index.html', data, () => {
            console.log('写入成功');

        })

        // if (config.pathArr.indexOf(path) < 0) {
        //     config.pathArr.push(path)
        // }
    }
}

