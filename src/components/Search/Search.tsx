import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Book } from '../../config/interfaces/Book/Book.interface'
import { Input } from 'antd'

interface SearchProp {
	books: Book[]
	setFilter: Dispatch<SetStateAction<Book[]>>
}
const Search = ({ books, setFilter }: SearchProp) => {
	const { Search } = Input
	const [value, setValue] = useState<string>('')
	const onSearch = () => {
		let filteredBooks = books
		if (value) {
			filteredBooks = books.filter((book) => {
				return (
					book.title.toLowerCase().includes(value.toLowerCase()) ||
					book.author.toLowerCase().includes(value.toLowerCase())
				)
			})
		}
		setFilter(filteredBooks)
	}
	useEffect(() => {
    onSearch()
  }, [value, books])

	return (
		<Input
			placeholder="search Author/Title "
			allowClear
			onChange={(e) => setValue(e.target.value)}
			style={{ width: 200 }}
		/>
	)
}

export default Search
