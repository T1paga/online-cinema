import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Layout.module.scss'
import Header from './header/Header'
import Navigation from './navigation/Navigation'

export interface LayoutProps {
	children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
	const { pathname } = useRouter()
	const isNotLayout = pathname === '/auth' || pathname.includes('admin')
	if (!isNotLayout)
		return (
			<div className={styles.layout}>
				<Navigation />
				<div className={styles.main}>
					<Header />
					<div className={styles.childrenBlock}>{children}</div>
				</div>
			</div>
		)
	else {
		return <div>{children}</div>
	}
}

export default Layout
