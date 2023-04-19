import Image from 'next/image'
import { FC } from 'react'

import Ticket from '@/assets/images/Ticket.svg'

import styles from '../Navigation.module.scss'

type Props = {}

const Tickets: FC = (props: Props) => {
	return (
		<div className={styles.tickets}>
			<div>
				<div>
					<Image
						src={Ticket}
						width={35}
						height={35}
						alt="ticket"
						draggable={false}
					/>
				</div>
			</div>
			<div>
				<h4>Play movie quizes and earn free tickets</h4>
				<p>50k people are playing now</p>
				<button>Start playing</button>
			</div>
		</div>
	)
}

export default Tickets
