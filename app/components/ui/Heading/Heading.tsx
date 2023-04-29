import { FC } from 'react'

import styles from './Heading.module.scss'

type Props = {
	text: string
}

const Heading: FC<Props> = ({ text }) => {
	return <div className={styles.heading}>{text}</div>
}

export default Heading
