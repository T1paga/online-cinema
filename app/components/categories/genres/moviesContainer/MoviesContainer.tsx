import React from 'react'

import styles from './MoviesContainer.module.scss'
import FavoriteMovies from './favoriteMovies/FavoriteMovies'
import PopularMovies from './popularMovies/PopularMovies'

type Props = {}

const MoviesContainer = (props: Props) => {
	return (
		<div className={styles.Container}>
			<PopularMovies />
			<FavoriteMovies />
		</div>
	)
}

export default MoviesContainer
