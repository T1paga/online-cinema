import dynamic from 'next/dynamic'
import { FC } from 'react'

import Banner from '@/ui/banner/Banner'
import Gallery from '@/ui/gallery/Gallery'
import { IGalleryItem } from '@/ui/gallery/gallery.types'

import { IMovie } from '@/shared/types/movie.types'

import { Meta } from '@/utils/meta/Meta'

import Content from './Content/Content'
import styles from './SingleMovie.module.scss'
import { useUpdateCountOpened } from './useUpdateCountOpened'
import Heading from '@/components/ui/Heading/Heading'

const DynamicPlayer = dynamic(() => import('@/ui/video-player/VideoPlayer'), {
	ssr: false,
})

const DynamicRateMovie = dynamic(() => import('./RateMovie/RateMovie'), {
	ssr: false,
})

const SingleMovie: FC<{ movie: IMovie; similarMovies: IGalleryItem[] }> = ({
	movie,
	similarMovies,
}) => {
	useUpdateCountOpened(movie.slug)

	return (
		<Meta title={movie.title} description={`Watch ${movie.title}`}>
			<Banner
				imagePath={movie.bigPoster}
				Detail={() => <Content movie={movie} />}
			/>

			<DynamicPlayer videoSource={movie.videoUrl} slug={movie.slug} />

			<div>
				<Heading text="Similar" />
				<Gallery items={similarMovies} />
			</div>

			<DynamicRateMovie slug={movie.slug} _id={movie._id} />
		</Meta>
	)
}

export default SingleMovie
