import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
    state = {
        query: '',
        listBooks: []
    }

    // 调用后台API搜索图书
    searchBooks = () => {
        const result = 20; // Result结果数量最大值
        const { query } = this.state

        if (query.length > 0) { // 请求校验
            BooksAPI.search(query, result).then(books => {
                if (books.length > 0) { // 如果结果为空就不渲染
                    const listBooks =
                        books
                            .map((book) => ({
                                cover: book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`,
                                title: book.title + (book.subtitle ? `: ${book.subtitle}` : ''),
                                authors: book.authors.join(', '),
                                id: book.id
                            }))
                    this.setState({ listBooks })
                } else {
                    this.setState({ listBooks: [] })
                }
            })
        }
    }

    // 调用API将图书加入书架
    handleMoveBook = (ev, id) => {
        const bookShelf = ev.target.value
        BooksAPI
            .update({ id }, bookShelf)
            .then(() => {
                this.updateList(id)
            })
    }

    // 过滤Enter提交搜索内容
    handleKeyPress = (ev) => {
        const key = ev.key
        if (key === 'Enter') {
            this.searchBooks()
        }
    }

    // 更新state中的query字段
    updateQuery = (ev) => {
        const query = ev.target.value.trim()
        this.setState({ query })
    }

    // 清空state中的query字段
    clearQuery = () => {
        this.setState({ query: '' })
    }

    // 加入书架操作后更新图书列表(删掉已加入的书)
    updateList = (deleteID) => {
        const oldList = this.state.listBooks
        const listBooks = oldList.filter((book) => (
            book.id !== deleteID
        ))
        this.setState({ listBooks })
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
                            onKeyPress={this.handleKeyPress}
                            onChange={this.updateQuery}
                        />
                    </div>
                </div>
                <div className='search-books-results'>
                    <ol className='books-grid'>
                        {listBooks.length > 0 && (listBooks.map((book, key) => (
                            <Book key={key} currentBook={book} onMoveBook={this.handleMoveBook} />
                        )))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks