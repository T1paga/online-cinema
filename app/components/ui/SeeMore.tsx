import Link from 'next/link'
import React, { FC } from 'react'

import styles from './styles.module.scss'

type Props = {
	link: string
}

const SeeMore: FC<Props> = ({ link }) => {
	return (
		<div className={styles.seeMore}>
			<Link href={link}>See more</Link>
		</div>
	)
}

export default SeeMore
