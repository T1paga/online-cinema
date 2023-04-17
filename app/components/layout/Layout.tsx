import { FC } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'
import Navigation from './navigation/Navigation'

export interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.main}>
				<Header />
				{children}
			</div>
		</div>
	)
}

export default Layout
