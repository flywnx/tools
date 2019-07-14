1.这是用electron 写的 一个桌面应用，用于批量修改文件夹内的文件名字

2.发布记录：
    npm install electron-packager -g 安装打包组件

    package.json 添加： "package": "electron-packager 打包路径 --all --out 输出路径 --overwrite --icon=icon路径"

    npm install -g asar

    asar pack 文件夹路径 项目名.asar  

    发布成exe的问题。需要安装electron-prebuilt   npm install -g electron-prebuilt

    然后运行 npm run-script package 即可

后续构思：
    写一个文件选择窗口，用于选择文件夹
    实现拖动文件读取路径


问题：
    没有结合vue
    没有用es6