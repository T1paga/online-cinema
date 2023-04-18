import { FC } from 'react'

import styles from './Header.module.scss'
import Notification from './Notification'
import UserIcon from './UserIcon'
import Seach from './search/Seach'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<Seach />
			<div className={styles.leftHeader}>
				<Notification />
				<UserIcon />
			</div>
		</div>
	)
}

export default Header
