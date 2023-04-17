import { IMenu } from './menu.interface'

const mainMenu: IMenu = {
	title: 'menu',
	items: [
		{
			icon: 'BiHome',
			title: 'Home',
			link: '/',
		},
		{
			icon: 'BiCameraMovie',
			title: 'Movies',
			link: '/',
		},
		{
			icon: 'BiMovie',
			title: 'TV Series',
			link: '/',
		},
		{
			icon: 'BiCalendar',
			title: 'Upcoming',
			link: '/',
		},
	],
}

export const menus: IMenu[] = [mainMenu]
