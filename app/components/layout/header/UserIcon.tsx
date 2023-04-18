import Image from 'next/image'
import React from 'react'

import User from '@/assets/girl.webp'

import styles from './Header.module.scss'

type Props = {}

const UserIcon = (props: Props) => {
	return (
		<div className={styles.userIcon}>
			<Image src={User} width={40} height={40} alt="note" draggable={false} />
		</div>
	)
}

export default UserIcon
