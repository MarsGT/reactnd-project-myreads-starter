import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    componentDidMount() {
        this.updateBooksInfo()
    }

    // 更新在架图书信息（进入主页和搜索后）
    updateBooksInfo = () => {
        BooksAPI
            .getAll()
            .then(books => {
                const list = {
                    currentlyReading: [],
                    wantToRead: [],
                    read: []
                }
                books
                    .forEach((book) => (
                        list[book.shelf].push({
                            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                            authors: book.authors ? book.authors.join(', ') : '',
                            id: book.id,
                            shelf: book.shelf
                        })
                    ))
                this.setState({ ...list })
            })
    }

    // 移动图书操作
    handleMoveBook = (ev, id) => {
        const bookShelf = ev.target.value
        BooksAPI
            .update({ id }, bookShelf)
            .then((booksIDs) => {
                const list = {
                    currentlyReading: [],
                    wantToRead: [],
                    read: []
                }
                const task = []
                for (let shelf in booksIDs) {
                    let child =
                        booksIDs[shelf]
                            .map((id) => (
                                BooksAPI
                                    .get(id)
                                    .then((book) => {
                                        list[shelf].push({
                                            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                                            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                                            authors: book.authors.join(', '),
                                            id: book.id,
                                            shelf: shelf
                                        })
                                    })
                            ))
                    task.push(Promise.all(child))
                }
                Promise
                    .all(task)
                    .then(() => (
                        this.setState({ ...list })
                    ))
            })
    }

    // 查询图书所在书架
    queryShelf = (bookID) => {
        // TODO
        const books = this.state
        for (let shelf in books) {
            let q = books[shelf].findIndex(book => book.id === bookID)
            if (q !== -1) {
                return shelf
            }
        }
        return 'none'
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route exact path='/' render={() => (
                        <ListBooks listBooks={this.state} onMoveBook={this.handleMoveBook} />
                    )} />
                </Switch>
                <Switch>
                    <Route path='/search' render={() => (
                        <SearchBooks onMoveBook={this.handleMoveBook} updateBooksInfo={this.updateBooksInfo} queryShelf={this.queryShelf} />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default BooksApp
