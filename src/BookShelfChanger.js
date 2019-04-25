import React from 'react'

function BookShelfChanger(props) {
    const { bookID, curShelf } = props
    return (
        <div className='book-shelf-changer'>
            <select value={curShelf} onChange={ev => props.onMoveBook(ev, bookID)}>
                <optgroup label='Move to...'>
                    <option value='currentlyReading'>Currently Reading</option>
                    <option value='wantToRead'>Want to Read</option>
                    <option value='read'>Read</option>
                </optgroup>
            </select>
        </div>
    )
}

export default BookShelfChanger