import { FC } from 'react'
import { BiCalendar, BiCameraMovie, BiFilm, BiHome } from 'react-icons/bi'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'

type MenuItemData = {
	icon: React.ReactNode
	title: string
	path: string
}

const menuItems: MenuItemData[] = [
	{
		icon: <BiHome />,
		title: 'Home',
		path: '/',
	},
	{
		icon: <BiCameraMovie />,
		title: 'Movies',
		path: '/movies',
	},
	{
		icon: <BiFilm />,
		title: 'TV Series',
		path: '/series',
	},
	{
		icon: <BiCalendar />,
		title: 'Upcoming',
		path: '/coming',
	},
]

const MenuContainer: FC = () => {
	return (
		<ul className={styles.container}>
			{menuItems.map((item) => (
				<MenuItem key={item.path} path={item.path} title={item.title}>
					{item.icon}
				</MenuItem>
			))}
		</ul>
	)
}

export default MenuContainer