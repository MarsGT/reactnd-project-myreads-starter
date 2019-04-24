import React from 'react'

function BookShelfChanger(props) {
    return (
        <div className='book-shelf-changer'>
            <select onChange={ev => props.onMoveBook(ev, props.bookID)}>
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