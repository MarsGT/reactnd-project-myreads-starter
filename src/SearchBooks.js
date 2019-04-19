import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        listBooks: []
    }

    searchBooks = () => {
        const result = 20; // Result结果数量最大值
        const { query } = this.state

        if (query.length === 0)
            return

        BooksAPI.search(query, result).then(books => {
            const listBooks =
                books
                    .map((book) => ({
                        "cover": book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                        "title": book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                        "authors": book.authors.join(', ')
                    }))
            this.setState({ listBooks })
        })
    }

    handleKeyPress = (k) => {
        if (k === 'Enter') {
            this.searchBooks()
        }
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {
        const { query, listBooks } = this.state

        return (
            <div className='search-books'>
                <div className='search-books-bar'>
                    <Link className='close-search' to='/'>Close</Link>
                    <div className='search-books-input-wrapper'>
                        <input
                            type='text'
                            value={query}
                            placeholder='Search by title or author'
                            onKeyPress={event => this.handleKeyPress(event.key)}
                            onChange={event => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {listBooks.map((book, key) => (
                            <Book key={key} currentBook={book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks