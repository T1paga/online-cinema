import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import Heading from '@/components/ui/Heading/Heading'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'

// import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'
import { Meta } from '@/utils/meta/Meta'

import AuthFields from '../../auth/authFields'

import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEditInput>({
			mode: 'onChange',
		})

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Edit user">
			<AdminNavigation />
			<Heading text="Edit user" />
			<form onSubmit={handleSubmit(onSubmit)} className="admin-form">
				{isLoading ? (
					// <SkeletonLoader count={3} />
					<div>123</div>
				) : (
					<>
						<AuthFields
							register={register}
							formState={formState}
							isPasswordRequired={false}
						/>
						<Controller
							name="isAdmin"
							control={control}
							render={({ field }) => (
								<button
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
									className="text-link block mb-7"
								>
									{field.value ? 'Make it regular user' : 'Make it admin'}
								</button>
							)}
						/>
					</>
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default UserEdit
