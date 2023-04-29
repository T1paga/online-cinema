import { FC } from 'react'

import Categories from '@/components/categories/Categories'
import Heading from '@/components/ui/Heading/Heading'
import Gallery from '@/components/ui/gallery/Gallery'
import Slider from '@/components/ui/slider/Slider'

import { Meta } from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<div className={styles.home}>
				<div className={styles.mainContent}>
					{slides.length && <Slider slides={slides} />}
					<div className={styles.cardsBlock}>
						<Heading text="Trending now" />
						{trendingMovies.length && <Gallery items={trendingMovies} />}
					</div>
					<div className={styles.cardsBlock}>
						<Heading text="Best actors" />
						{actors.length && <Gallery items={actors} />}
					</div>
				</div>
				<Categories />
			</div>
		</Meta>
	)
}

export default Home
