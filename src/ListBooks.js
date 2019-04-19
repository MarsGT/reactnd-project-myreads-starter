import React, { Component } from 'react'
import BookShelf from './BookShelf'
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
                        {shelfList.map((shelf, key) => (
                            <BookShelf key={key} shelf={shelf} books={listBooks} />
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