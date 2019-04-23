import React from 'react'
import Book from './Book'

function BookShelf(props) {
    const { shelf, books } = props

    return (
        <div className="bookshelf" >
            <h2 className="bookshelf-title">{shelf.show}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books[shelf.id].map((book, key) => (
                        <Book key={key} currentBook={book} />
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookShelf