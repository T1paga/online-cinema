import React, { FC } from 'react'

type Props = {
	link: string
}

const SeeMore: FC<Props> = ({ link }) => {
	return <div>{link}</div>
}

export default SeeMore
