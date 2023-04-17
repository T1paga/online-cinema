import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect } from 'react'

import styles from './Menu.module.scss'

type Props = {
	children: ReactNode
	title: string
	path: string
}

const MenuItem: FC<Props> = (props: Props) => {
	const { asPath } = useRouter()

	return (
		<li className={styles.menuItem}>
			<Link
				href={props.path || '#'}
				className={asPath === props.path ? styles.active : ''}
			>
				<div className={styles.content}>
					{props.children}
					<h4>{props.title}</h4>
				</div>
			</Link>
		</li>
	)
}

export default MenuItem
