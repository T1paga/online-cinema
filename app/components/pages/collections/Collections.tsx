import { FC } from 'react'

import { Meta } from '@/utils/meta/Meta'

import CollectionItem from './CollectionItem'
import styles from './Collections.module.scss'
import { ICollection } from './collections.types'
import Heading from '@/components/ui/Heading/Heading'
import Description from '@/components/ui/Heading/Description'

const title = 'Discovery'
const description = 'In this section you will find all genres on our site'

const Collections: FC<{ collections: ICollection[] }> = ({ collections }) => {
	return (
		<Meta title={title} description={description}>
			<Heading text={title} />
			<Description text={description} className={styles.description} />

			<section className={styles.collections}>
				{collections.map((collection) => (
					<CollectionItem key={collection._id} collection={collection} />
				))}
			</section>
		</Meta>
	)
}

export default Collections
