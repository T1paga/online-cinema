import { FC } from 'react'

import styles from './Header.module.scss'
import Notification from './Notification'
import UserIcon from './UserIcon'
import Search from './search/Search'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Search />
			<div className={styles.leftHeader}>
				<Notification />
				<UserIcon />
			</div>
		</div>
	)
}

export default Header
