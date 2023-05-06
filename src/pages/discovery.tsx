import { GetStaticProps, NextPage } from 'next'

import { GenreService } from '@/services/genre.service'
import { ICollection } from '@/components/pages/collections/collections.types'
import Collections from '@/components/pages/collections/Collections'

const GenresPage: NextPage<{ collections: ICollection[] }> = ({
	collections,
}) => {
	return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: collections } = await GenreService.getCollections()

		console.log('col', collections)

		return {
			props: { collections },
			revalidate: 60,
		}
	} catch (e) {
		// console.log(errorCatch(e))

		return {
			props: {},
			notFound: true,
		}
	}
}

export default GenresPage
