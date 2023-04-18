import React from 'react'
import { BiSearch } from 'react-icons/bi'

import styles from './Search.module.scss'

type Props = {}

const Seach = (props: Props) => {
	return (
		<div className={styles.mySearch}>
			<input
				className={styles.inputWindow}
				name="s"
				placeholder="Искать здесь..."
				type="text"
			/>
			<BiSearch size={35} color="#666666" />
		</div>
	)
}

export default Seach
