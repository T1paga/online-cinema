import { FC } from 'react'

import styles from '../../Categories.module.scss'
import { usePopularGenres } from '../usePopularGenres'

type Props = {}

const GenreMenu: FC = (props: Props) => {
	const { isLoading, data } = usePopularGenres()

	console.log('data', data)

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<div className="">
			{data?.map((genre) => (
				<label key={genre.title} id="checkbox" className={styles.myLabel}>
					<input
						type="checkbox"
						name="checkbox"
						value="yes"
						id="checkbox"
						className={styles.customCheckbox}
					/>
					{genre.title}
					<span></span>
				</label>
			))}
		</div>
	)
}

export default GenreMenu
