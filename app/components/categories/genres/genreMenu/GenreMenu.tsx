import Link from 'next/link'
import { FC } from 'react'
import { BiArea } from 'react-icons/bi'

import styles from '../../Categories.module.scss'
import { usePopularGenres } from '../usePopularGenres'

type Props = {}

const GenreMenu: FC = (props: Props) => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div>Loading...</div>
	) : (
		<div className="">
			{data?.map((genre) => (
				// <label key={genre.title} id="checkbox" className={styles.myLabel}>
				// 	<input
				// 		type="checkbox"
				// 		name="checkbox"
				// 		value="yes"
				// 		id="checkbox"
				// 		className={styles.customCheckbox}
				// 	/>
				// 	{genre.title}
				// 	<span></span>
				// </label>

				<Link href={genre.link} key={genre.title}>
					<span className={styles.myLabel}>
						{genre.title}

						<BiArea size={25} color={'#3DD2CC'} />
					</span>
				</Link>
			))}
		</div>
	)
}

export default GenreMenu
