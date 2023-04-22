import React from 'react'

import styles from '../Categories.module.scss'

import GenreMenu from './genreMenu/GenreMenu'

type Props = {}

const Genres = (props: Props) => {
	return (
		<>
			<div className={styles.headers}>
				<h2>Categories</h2>
				<h3>Uncheck all</h3>
			</div>
			<div className={styles.menu}>
				<GenreMenu />
			</div>
		</>
	)
}

export default Genres
