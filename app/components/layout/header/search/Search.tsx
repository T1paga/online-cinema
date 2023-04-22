import React, { ChangeEvent, useState } from 'react'
import { useQuery } from 'react-query'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import styles from './Search.module.scss'
import SearchInput from './searchInput/SeachInput'

type Props = {}

const Search = (props: Props) => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	// const { isSuccess, data: popularMovies } = useQuery(
	// 	['search movie list', debouncedSearch],
	// 	() => MovieService.getMovies(debouncedSearch),
	// 	{
	// 		select: ({ data }) => data,
	// 		enabled: !!debouncedSearch,
	// 	}
	// )

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className={styles.search}>
			<SearchInput searchTerm={searchTerm} handleSearch={handleSearch} />
		</div>
	)
}

export default Search
