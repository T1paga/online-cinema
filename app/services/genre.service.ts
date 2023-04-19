import { axiosClassic } from 'api/interceptors'
import { getGenreUrl } from 'config/url.config'

import { IGenre } from '@/shared/types/movie.types'

export const GenreService = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IGenre[]>(getGenreUrl(''), {
			params: searchTerm
				? {
						searchTerm,
				  }
				: {},
		})
	},
}
