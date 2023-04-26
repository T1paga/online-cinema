import { FC } from 'react'

import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import { Meta } from '@/utils/meta/Meta'

import styles from './Admin.module.scss'
import Statistics from './statistics/Statistics'

type Props = {}

const Admin: FC = (props: Props) => {
	return (
		<Meta title="Admin panel">
			<div>
				<AdminNavigation />
				<h3 className={styles.headers}>Some statistics</h3>
				<Statistics />
			</div>
		</Meta>
	)
}

export default Admin
