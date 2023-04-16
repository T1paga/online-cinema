import { FC } from 'react'

import styles from './Layout.module.scss'
import Navigation from './navigation/Navigation'
import Sidebar from './sidebar/Sidebar'

export interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Sidebar />
			<div className={styles.main}>
				<Navigation />
				{children}
			</div>
		</div>
	)
}

export default Layout
