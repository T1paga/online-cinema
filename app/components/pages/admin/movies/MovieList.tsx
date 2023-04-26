import { FC } from 'react'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AdminHeader from '@/ui/admin-table/AdminHeader/AdminHeader'
import AdminTable from '@/ui/admin-table/AdminTable/AdminTable'

import { Meta } from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const MovieList: FC = () => {
	const {
		createAsync,
		data,
		isLoading,
		deleteAsync,
		searchTerm,
		handleSearch,
	} = useMovies()

	return (
		<Meta title="Movies">
			<AdminNavigation />
			<AdminHeader
				onClick={createAsync}
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			<AdminTable
				tableItems={data || []}
				headerItems={['Title', 'Genres', 'Rating']}
				isLoading={isLoading}
				removeHandler={deleteAsync}
			/>
		</Meta>
	)
}

export default MovieList
