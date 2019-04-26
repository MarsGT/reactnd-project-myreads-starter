import React from 'react'
import BookShelfChanger from './BookShelfChanger'

function Book(props) {
    const { currentBook, onMoveBook } = props
    
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${currentBook.cover})` }}></div>
                    <BookShelfChanger bookID={currentBook.id} curShelf={currentBook.shelf} onMoveBook={onMoveBook} />
                </div>
                <div className="book-title">{currentBook.title}</div>
                <div className="book-authors">{currentBook.authors}</div>
            </div>
        </li>
    )
}

export default Book