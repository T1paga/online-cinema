import MovieList from '@/components/pages/admin/movies/MovieList'

import { NextPageAuth } from '@/shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
	return <MovieList />
}

MovieListPage.isOnlyAdmin = true

export default MovieListPage
