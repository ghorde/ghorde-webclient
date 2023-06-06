import { apiAxios } from "$lib/helpers/axios.js"
import {redirect} from "@sveltejs/kit"

export const load = () => {
  throw redirect( 302, '/') 
}

export const actions = {
  default: async({cookies}) => {
    const code = cookies.get('session')
    if (!code) {
      throw redirect( 302, '/')
    }
    apiAxios.post('session/revoke', JSON.stringify({code}))
    cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		})
    throw redirect( 302, '/')
  }
}