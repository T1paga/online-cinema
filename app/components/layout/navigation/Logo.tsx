import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import logoImage from '@/assets/images/logoImage.svg'

type Props = {}

const Logo: FC = (props: Props) => {
	return (
		<Link href="/">
			<Image
				src={logoImage}
				width={118}
				height={42}
				alt="logo"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
