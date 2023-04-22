import { FC } from 'react'

import styles from './FavoriteMovies.module.scss'

type Props = {}

const NotAuthFavorites: FC = (props: Props) => {
	return <div className={styles.notAuth}> Not Auth Favorites </div>
}

export default NotAuthFavorites
