import React from 'react'
import { BiLogOut } from 'react-icons/bi'

import styles from '../Navigation.module.scss'
import MenuItem from '../menuContainer/MenuItem'

type Props = {}

const Logout = (props: Props) => {
	return (
		<div className={styles.logout}>
			<MenuItem path="/exit" title="Log out">
				<BiLogOut />
			</MenuItem>
		</div>
	)
}

export default Logout
