import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
	return (
		<>
			<AdminNavigation />
			<div>UsersListPage</div>
		</>
	)
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
