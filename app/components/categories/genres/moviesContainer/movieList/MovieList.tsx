import { FC } from 'react'

import SeeMore from '@/components/ui/SeeMore'

import { IMovieList } from '../movie.types'

import MovieItem from './MovieItem'
import styles from './MovieList.module.scss'

type Props = {}

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<h2>Popular movies</h2>
			{movies.map((movie) => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<SeeMore link={link} />
		</div>
	)
}

export default MovieList
