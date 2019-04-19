import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
    render() {
        const { shelf, books } = this.props

        return (
            <div className="bookshelf" >
                <h2 className="bookshelf-title">{shelf.show}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books[shelf.id].map(book => (
                            <Book book={book} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf