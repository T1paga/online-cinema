import ActorList from '@/components/pages/admin/actors/ActorList'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorListPage: NextPageAuth = () => {
	return <ActorList />
}

ActorListPage.isOnlyAdmin = true

export default ActorListPage
