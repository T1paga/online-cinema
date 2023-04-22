import { FC } from 'react'

import styles from './Categories.module.scss'
import Genres from './genres/Genres'

type Props = {}

const Categories: FC = (props: Props) => {
	return (
		<div className={styles.categories}>
			<Genres />
		</div>
	)
}

export default Categories
