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
    apiAxios.post('/session/revoke', {code}).catch((err) => {
      cookies.set('session', '', {
        path: '/',
        expires: new Date(0),
      })
      return redirect( 302, '/')
    })
    cookies.set('session', '', {
			path: '/',
			expires: new Date(0),
		})
    throw redirect( 302, '/login')
  }
}