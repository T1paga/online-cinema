import { FC, useState } from 'react'
import { BiArrowFromLeft, BiArrowFromRight } from 'react-icons/bi'
import 'simplebar-react/dist/simplebar.min.css'

import styles from './Navigation.module.scss'
import Tickets from './ticket/Tickets'
import Logo from './logo/Logo'
import Logout from './logout/Logout'
import MenuContainer from './menuContainer/MenuContainer'

const Navigation: FC = () => {
	return (
		<div className={styles.navigations}>
			<div className={styles.openClose}>
				<Logo />
				<BiArrowFromRight size={25} color="#666666" />
			</div>
			<MenuContainer />
			<Tickets />
			<Logout />
		</div>
	)
}

export default Navigation
