import { FC } from 'react'

import Categories from '@/components/categories/Categories'
import Gallery from '@/components/ui/gallery/Gallery'
import Slider from '@/components/ui/slider/Slider'

import { Meta } from '@/utils/meta/Meta'

import styles from './Home.module.scss'
import { IHome } from './home.types'

const Home: FC<IHome> = ({ slides, trendingMovies, actors }) => {
	console.log(slides)
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<div className={styles.home}>
				<div className={styles.mainContent}>
					{slides.length && <Slider slides={slides} />}
					<div className="my-10">
						<h2>Trending now</h2>
						{trendingMovies.length && <Gallery items={trendingMovies} />}
					</div>
					<div>
						<h2>Best actors</h2>
						{actors.length && <Gallery items={actors} />}
					</div>
				</div>
				<Categories />
			</div>
		</Meta>
	)
}

export default Home
