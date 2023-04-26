import UserList from '@/components/pages/admin/users/UserList'
import AdminNavigation from '@/components/ui/admin-navigation/AdminNavigation'

import { NextPageAuth } from '@/shared/types/auth.types'

const UsersListPage: NextPageAuth = () => {
	return (
		<>
			<AdminNavigation />
			<UserList />
		</>
	)
}

UsersListPage.isOnlyAdmin = true

export default UsersListPage
