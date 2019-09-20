/**
 *下载小说盅真人
 * */

let cheerio = require("cheerio"),
  fs = require("fs"),
  //   util = require("util"),

  https = require("https"),
  newslist = [];
//   开始页 = 2911745,
// 结束页 = 2979837
// 连接=   "https://m.biqudao.com/bqge1618/2979837.html"
getXS(2912761);

function getXS(webNum) {
  let url = "https://m.biqudao.com/bqge1618/" + webNum + ".html",
    html = "",
    list = [],
    buffer = null;
  console.log(url);
  let req = https.request(url, function(res) {
    res.on("data", function(data) {
      list.push(data);
    });
    res.on("end", function() {
      buffer = Buffer.concat(list);
      html = buffer.toString();
      $ = cheerio.load(html);
      // console.log(html);
      let next = $("#pt_next")[0].attribs.href,
        nextNum = next.split("/")[2].split(".")[0];
      // console.log(next);
      let title = $("title")[0].children[0]["data"];
      // console.log($("body")[0]);
      let data = deleteHtmlTag(html);
      data =
        title +
        "\n" +
        data
          .split("『章节错误,点此举报』")[1]
          .split("『加入书签，方便阅读』")[0] +
        "\n";

      fs.appendFile("./xiaoshuo/" + "盅真人" + ".txt", data, (err) => {
        console.log(err);
      });
      if (webNum != 2979837) {
        console.log("nextNum:" + nextNum);
        getXS(nextNum);
      }
    });
  });
  req.end();
}

//去除html标签
function deleteHtmlTag(str) {
  str = str.replace(/<[^>]+>|&[^>]+;/g, "").trim(); //去掉所有的html标签和&nbsp;之类的特殊符合
  return str;
}
