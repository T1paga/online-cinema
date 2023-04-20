import { FC } from 'react'

import Categories from '@/components/categories/Categories'

import { Meta } from '@/utils/meta/Meta'

import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<div className={styles.home}>
				<div className={styles.mainContent}></div>
				<Categories />
			</div>
		</Meta>
	)
}

export default Home
