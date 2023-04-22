import React, { ChangeEvent, FC } from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from './SearchInput.module.scss'

interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.mySearch}>
			<input
				className={styles.inputWindow}
				name="s"
				placeholder="Искать здесь..."
				type="text"
				value={searchTerm}
				onChange={handleSearch}
			/>
			<BiSearch size={35} color="#666666" />
		</div>
	)
}

export default SearchInput
