import { useRouter } from 'next/router'
import { FC } from 'react'
import { BiEdit } from 'react-icons/bi'
import { IoMdCloseCircleOutline } from 'react-icons/io'

import styles from './AdminActions.module.scss'

interface IAdminActions {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminActions> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	return (
		<div className={styles.actions}>
			<button onClick={() => push(editUrl)}>
				<BiEdit size={25} color="#ff00ff" />
			</button>
			<button onClick={removeHandler}>
				<IoMdCloseCircleOutline size={25} color="#ff00ff" />
			</button>
		</div>
	)
}

export default AdminActions
