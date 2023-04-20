import { FC } from 'react'

import styles from './Categories.module.scss'

type Props = {}

const Categories: FC = (props: Props) => {
	return (
		<div className={styles.categories}>
			<div className={styles.headers}>
				<h2>Categories</h2>
				<h3>Uncheck all</h3>
			</div>
			<div className={styles.menu}>
				<label id="checkbox" className={styles.myLabel}>
					<input
						type="checkbox"
						name="checkbox"
						value="yes"
						id="checkbox"
						className={styles.customCheckbox}
					/>
					Category
					<span></span>
				</label>
			</div>
		</div>
	)
}

export default Categories
