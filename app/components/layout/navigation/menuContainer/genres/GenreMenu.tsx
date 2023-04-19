import { FC } from 'react'
import { BiFilm } from 'react-icons/bi'

import MenuItem from '../MenuItem'

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
				<MenuItem key={genre.title} title={genre.title}>
					<BiFilm size={25} color="#666666" />
				</MenuItem>
			))}
		</div>
	)
}

export default GenreMenu
