# 图书跟踪应用项目

本项目是优达学城前端纳米学位的React基础课程最终评估项目，fork自[MyReads Project](https://github.com/udacity/reactnd-project-myreads-starter)项目。在此项目中，您将看到一个图书书架，并能够自由选择和归类阅读过的图书、正在阅读的图书以及想要阅读的图书。该项目的目的是使用React构建一个应用，并利用已有的API服务器和客户端库提供服务，并且在与应用交互时能够保存信息。

## 如何安装并启动本项目

- 在命令行克隆本项目 `git clone https://github.com/marsgt/reactnd-project-myreads-starter.git`
- 使用 `npm install` 或 `yarn install` （推荐后者）安装所有的项目依赖
- 最后运行 `npm start` 或 `yarn start` （推荐后者），将启动项目（开发服务器）
- 可以使用 `npm build` 或 `yarn build`，将本项目编译为可在生产环境下部署的静态文件

## 使用说明

- 启动项目后会自动打开首页，URL为`http://localhost:3000/`
- 首页（书架）会有三栏，分别是“Currently Reading/在读”、“Want to Read/想读”和“Read/已读”
- 点击图书右下角绿色箭头会打开“Move To.../移动到...”下拉控件，可以选择将本层移动到下一层
- 点击首页右下角加号图标，将打开搜索页，URL为`http://localhost:3000/search`
- 搜索点击键盘Enter将触发搜索提交，提交后将在页面上展示20个搜索结果
- 点击搜索结果中、图书右下角的绿色箭头，可以选择将该书移动到主页书架
- 点击搜索页左上角的左箭头，可以返回到主页

## 关于搜索功能的特别提示

本项目的后端API使用了一组特定的搜索词，在文件[SEARCH_TERMS.md](SEARCH_TERMS.md)中有所体现。所以在搜索“Basket Weaving”或“Bubble Wrap”时，如果没有任何结果返回，请不必惊讶。
