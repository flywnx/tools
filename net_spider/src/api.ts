import request from 'request'
import cheerio from 'cheerio'


export default class api {
    public static setReq(path: string): void {
        request(path, (error, response, body) => {
            if (!error && response.statusCode == 200) {
                // console.log(body)
                // console.log(typeof body);
                api.saveInfo(body, path)
                // return body
            }
        })
    }
    public static saveInfo(data: any, path: string): void {
        let doc = cheerio.load(data)
        // console.log(doc)

        let node_a = doc("a").html()
        let node_ul = doc("ul").html()
        console.log(node_a);
        console.log(node_ul);

        // if (config.pathArr.indexOf(path) < 0) {
        //     config.pathArr.push(path)
        // }
    }
}

