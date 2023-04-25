import Admin from '@/components/pages/admin/Admin'

import { NextPageAuth } from '@/shared/types/auth.types'

const AdminPage: NextPageAuth = () => {
	return <Admin />
}

AdminPage.isOnlyAdmin = true

export default AdminPage
