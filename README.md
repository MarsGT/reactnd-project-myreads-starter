# 图书跟踪应用项目

本项目是优达学城前端纳米学位的React基础课程最终评估项目，fork自[MyReads Project](https://github.com/udacity/reactnd-project-myreads-starter)项目。在此项目中，您将看到一个图书书架，并能够自由选择和归类阅读过的图书、正在阅读的图书以及想要阅读的图书。该项目的目的是使用React构建一个应用，并利用已有的API服务器和客户端库提供服务，并且在与应用交互时能够保存信息。

## 如何安装并启动本项目

- 在命令行克隆本项目 `git clone https://github.com/marsgt/reactnd-project-myreads-starter.git`
- 使用 `npm install` 或 `yarn install` 安装所有的项目依赖
- 然后运行 `npm start` 或 `yarn start` 启动开发服务器

## 后台服务

该应用使用了Udacity的后端API。所有的接口均在[`BooksAPI.js`](src/BooksAPI.js)文件中有所体现。以下是所有接口及简要说明：

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

```js
getAll()
```

- 返回一个 Promise，它解析成一个包含 book 对象集合的 JSON 对象。
- 此集合代表了应用里书架中的图书。

### `update`

```js
update(book, shelf)
```

- book: 类型为`<Object>`，并包含至少一个 `id` 属性
- shelf: 类型为`<String>`，包含 ["wantToRead", "currentlyReading", "read"] 其中之一
- 返回一个 Promise，它解析为包含POST请求的响应数据的JSON对象

### `search`

```js
search(query, maxResults)
```

- query: 类型为`<String>`，
- maxResults: 类型为`<Integer>`。由于后端限制，该值的最高上限为20。
- 返回一个Promise，它解析成一个包含book对象集合的JSON对象。
- 搜索结果中并不包含相应的书架信息，它们只是一个图书的结果集。

## 关于搜索功能的特别提示

本项目的后端API使用了一组特定的搜索词，在文件[SEARCH_TERMS.md](SEARCH_TERMS.md)中有所体现。所以在搜索“Basket Weaving”或“Bubble Wrap”时，如果没有任何结果返回，请不必惊讶。
