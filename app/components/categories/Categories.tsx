import { FC } from 'react'

import styles from './Categories.module.scss'
import Genres from './genres/Genres'
import MoviesContainer from './genres/moviesContainer/MoviesContainer'

type Props = {}

const Categories: FC = (props: Props) => {
	return (
		<div className={styles.categories}>
			<Genres />
			<MoviesContainer />
		</div>
	)
}

export default Categories
