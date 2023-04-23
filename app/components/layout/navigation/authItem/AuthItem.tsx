import { FC } from 'react'
import { BiLockAlt, BiLogInCircle, BiUserCircle } from 'react-icons/bi'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/configs/url.config'

import styles from '../Navigation.module.scss'
import Logout from '../logout/Logout'
import MenuItem from '../menuContainer/MenuItem'

const AuthItem: FC = () => {
	const { user } = useAuth()

	return (
		<>
			{user ? (
				<>
					<div className={styles.navButton}>
						<MenuItem title="Profile" path="/profile">
							<BiUserCircle size={20} />
						</MenuItem>
					</div>
					<Logout />
				</>
			) : (
				<div className={styles.navButton}>
					<MenuItem title="Auth" path="/auth">
						<BiLogInCircle size={20} />
					</MenuItem>
				</div>
			)}

			{user?.isAdmin && (
				<div className={styles.navButton}>
					<MenuItem title="Admin Panel" path={getAdminHomeUrl()}>
						<BiLockAlt size={20} />
					</MenuItem>
				</div>
			)}
		</>
	)
}

export default AuthItem
