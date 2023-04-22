import { FC } from 'react'
import { BiFilm } from 'react-icons/bi'

import MenuItem from '../../layout/navigation/menuContainer/MenuItem'
import styles from '../Categories.module.scss'

import { usePopularGenres } from './usePopularGenres'

type Props = {}

const GenreMenu: FC = (props: Props) => {
	const { isLoading, data } = usePopularGenres()

	console.log('data', data)

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<div className="">
			{data?.map((genre) => (
				// <MenuItem key={genre.title} title={genre.title}>
				// 	<BiFilm size={25} color="#666666" />
				// </MenuItem>
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
