import dynamic from 'next/dynamic'
import { FC } from 'react'
import { BiArrowFromRight } from 'react-icons/bi'
import 'simplebar-react/dist/simplebar.min.css'

import styles from './Navigation.module.scss'
import AuthItem from './authItem/AuthItem'
import Logo from './logo/Logo'
import MenuContainer from './menuContainer/MenuContainer'
import Tickets from './ticket/Tickets'

const DynamicAuthItemsx = dynamic(() => import('./authItem/AuthItem'), {
	ssr: false,
})

const Navigation: FC = () => {
	return (
		<div className={styles.navigations}>
			<div className={styles.openClose}>
				<Logo />
				<BiArrowFromRight size={25} color="#666666" />
			</div>
			<MenuContainer />
			<Tickets />
			<DynamicAuthItemsx />
		</div>
	)
}

export default Navigation
