import Image from 'next/image'
import React from 'react'

import notification from '@/assets/images/Notification.svg'

import styles from './Header.module.scss'

type Props = {}

const Notification = (props: Props) => {
	return (
		<div className={styles.notification}>
			<Image
				src={notification}
				width={40}
				height={40}
				alt="note"
				draggable={false}
			/>
		</div>
	)
}

export default Notification
