import { FC } from 'react'

import { useFavorites } from '@/components/pages/favorites/useFavorites'
// import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import { useAuth } from '@/hooks/useAuth'

import { useRenderClient } from '@/hooks/useRenderClient'

import MovieList from '../movieList/MovieList'

import NotAuthFavorites from './NotAuthFavorites'

const FavoriteMovieList: FC = () => {
	const { isLoading, favoritesMovies } = useFavorites()
	const { user } = useAuth()
	const { isRenderClient } = useRenderClient()

	if (!user) return <NotAuthFavorites />
	if (isRenderClient)
		return isLoading ? (
			<div className="mt-11">
				{/* <SkeletonLoader count={3} className="h-28 mb-4" /> */}
			</div>
		) : (
			<MovieList
				list={{
					link: '/favorites',
					movies: favoritesMovies?.slice(0, 3) || [],
					title: 'Favorites',
				}}
			/>
		)
}

export default FavoriteMovieList
