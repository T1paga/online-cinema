import { getGenreUrl, getMovieUrl } from 'config/url.config'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import { getGenresListEach } from '@/utils/movie/getGenresList'

import { IWidgetMovie } from '../movie.types'

import styles from './MovieList.module.scss'

const MovieItem: FC<{ movie: IWidgetMovie }> = ({ movie }) => {
	// return <div>{movie.title}</div>
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					alt={movie.title}
					width={100}
					height={150}
					src={movie.poster}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.about}>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map(({ slug, name, _id }, idx) => (
							<Link key={_id} href={getGenreUrl(slug)}>
								{getGenresListEach(idx, movie.genres.length, name)}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.rating}>
					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}

export default MovieItem
