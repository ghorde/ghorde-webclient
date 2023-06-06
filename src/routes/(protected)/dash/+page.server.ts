import { apiAxios } from "$lib/helpers/axios"
import { redirect } from "@sveltejs/kit"

export const load = async({cookies, locals}) => {
  if (!locals.user) {
		throw redirect(302, '/')
	}
  const token = cookies.get('session')
  let getData = await apiAxios.post('user/hordeUser', JSON.stringify({token}))
  if (getData.data.data.status === 500) {
    getData = await apiAxios.post('user/horde', JSON.stringify({token}))
  }
  return { userData: getData.data.data }
}

export const actions = {
  updateUserData: async({cookies, request}) => {
    const data = await request.formData()
    const token = cookies.get('session')
    const hordeToken = data.get('horde-token')
    const negativePrompt = data.getAll('negative-prompts')
    await apiAxios.post('user/hordeUserUpdate', {hordeToken, negativePrompt, token}).catch((e) => console.log(e))
    throw redirect(302, '/dash')
  }
}