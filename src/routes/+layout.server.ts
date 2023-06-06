// get `locals.user` and pass it to the `page` store
export const load = async ({ locals }: any) => {
	return {
		user: locals.user,
	}
}
