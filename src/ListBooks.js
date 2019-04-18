import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ListBooks extends Component {
    state = {
        shelfList: [
            {
                'show': 'Currently Reading',
                'id': 'currentlyReading'
            },
            {
                'show': 'Want to Read',
                'id': 'wantToRead'
            },
            {
                'show': 'Read',
                'id': 'read'
            }
        ]
    }

    render() {
        const { listBooks } = this.props
        const { shelfList } = this.state

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelfList.map((shelf, i) => (
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">{shelf.show}</h2>
                                <div className="bookshelf-books">
                                    <ol className="books-grid">
                                        {listBooks[shelf.id].map(book => (
                                            <li>
                                                <div className="book">
                                                    <div className="book-top">
                                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover})` }}></div>
                                                        <div className="book-shelf-changer">
                                                            <select>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="book-title">{book.title}</div>
                                                    <div className="book-authors">{book.authors}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks