import React from 'react'
import { BiLogOut } from 'react-icons/bi'

import { useActions } from '@/hooks/useActions'

import styles from '../Navigation.module.scss'
import MenuItem from '../menuContainer/MenuItem'

type Props = {}

const Logout = (props: Props) => {
	const { logout } = useActions()

	const handleLogout = (e: any) => {
		e.preventDefault()
		logout()
	}

	return (
		<span className={styles.navButton} onClick={handleLogout}>
			<MenuItem path="/exit" title="Log out">
				<BiLogOut />
			</MenuItem>
		</span>
	)
}

export default Logout
