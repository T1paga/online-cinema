import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '@/components/ui/form-elements/Button'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import spider from '@/assets/spider.webp'

import { Meta } from '@/utils/meta/Meta'

import styles from './Auth.module.scss'
import AuthFields from './authFields'
import { useAuthRedirect } from './useAuthRedirect'

export interface IAuthInput {
	email: string
	password: string
}

const Auth: FC = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)
		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h2>Welcome back, my friend</h2>
					<p>Please fill in all fields</p>

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>
						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
				<div className={styles.image}>
					<Image
						src={spider}
						width="0"
						height="0"
						alt="note"
						draggable={false}
					/>
				</div>
			</section>
		</Meta>
	)
}

export default Auth
