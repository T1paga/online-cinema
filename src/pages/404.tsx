import Image from 'next/image'

import Heading from '@/components/ui/Heading/Heading'

import text from '@/assets/big-logo-img.svg'
import logo from '@/assets/big-logo.svg'

import { Meta } from '@/utils/meta/Meta'

import styles from '../styles/404.module.scss'

export default function Error404() {
	return (
		<Meta title="Page not found">
			<div className={styles.error}>
				<Heading text="404, Такой страницы не существует" />
				<div>
					<Image
						src={logo}
						width={150}
						height={150}
						alt="note"
						draggable={false}
					/>
					<Image
						src={text}
						width={410}
						height={142}
						alt="note"
						draggable={false}
					/>
				</div>
			</div>
		</Meta>
	)
}
