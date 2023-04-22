import { FC } from 'react'

import styles from './Categories.module.scss'
import GenreMenu from './genres/GenreMenu'

type Props = {}

const Categories: FC = (props: Props) => {
	return (
		<div className={styles.categories}>
			<div className={styles.headers}>
				<h2>Categories</h2>
				<h3>Uncheck all</h3>
			</div>
			<div className={styles.menu}>
				<GenreMenu />
			</div>
		</div>
	)
}

export default Categories
