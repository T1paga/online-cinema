import { FC } from 'react'

import Description from '@/components/ui/Heading/Description'
import GalleryItem from '@/components/ui/gallery/GalleryItem'

import { Meta } from '@/utils/meta/Meta'

import { getMovieUrl } from '@/configs/url.config'

import Heading from '../Heading/Heading'

import styles from './Catalog.module.scss'
import { ICatalog } from './catalog.types'

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
	return (
		<Meta title={title} description={description}>
			<Heading text={title} />
			{description && (
				<Description text={description} className={styles.description} />
			)}

			<section className={styles.movies}>
				{movies.map((movie) => (
					<GalleryItem
						key={movie._id}
						variant="horizontal"
						item={{
							name: movie.title,
							posterPath: movie.bigPoster,
							url: getMovieUrl(movie.slug),
							content: {
								title: movie.title,
							},
						}}
					/>
				))}
			</section>

			{/* <div className="text-center">
				<button className={styles.button}>Load more</button>
			</div> */}
		</Meta>
	)
}

export default Catalog
