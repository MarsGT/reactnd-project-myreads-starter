import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
        BooksAPI.getAll().then(books => {
            const currentlyReading =
                books
                    .filter((book) => (book.shelf === 'currentlyReading'))
                    .map((book) => ({
                        "cover": book.imageLinks.thumbnail,
                        "title": book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                        "authors": book.authors.join(', ')
                    }))
            const wantToRead =
                books
                    .filter((book) => (book.shelf === 'wantToRead'))
                    .map((book) => ({
                        "cover": book.imageLinks.thumbnail,
                        "title": book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                        "authors": book.authors.join(', ')
                    }))
            const read =
                books
                    .filter((book) => (book.shelf === 'read'))
                    .map((book) => ({
                        "cover": book.imageLinks.thumbnail,
                        "title": book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                        "authors": book.authors.join(', ')
                    }))
            this.setState({ currentlyReading, wantToRead, read })
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <ListBooks
                        listBooks={this.state}
                    />
                )} />
                <Route exact path='/search' render={() => (
                    <SearchBooks />
                )} />
            </div>
        )
    }
}

export default BooksApp
