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
        BooksAPI
            .getAll()
            .then(books => {
                const list = this.state
                books
                    .forEach((book) => (
                        list[book.shelf].push({
                            cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                            title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                            authors: book.authors.join(', '),
                            id: book.id
                        })
                    ))
                this.setState({ ...list })
            })
    }

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
                                            id: book.id
                                        })
                                    })
                            ))
                    task.push(Promise.all(child))
                }
                let done = Promise.all(task)
                done.then(() => (
                    this.setState({ ...list })
                ))
            })
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
                        <SearchBooks onMoveBook={this.handleMoveBook} />
                    )} />
                </Switch>
            </div>
        )
    }
}

export default BooksApp
