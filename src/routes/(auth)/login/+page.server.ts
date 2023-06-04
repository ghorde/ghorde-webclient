import { apiAxios } from "$lib/helpers/axios.js";
import {redirect} from "@sveltejs/kit"

export const load = async({url, cookies}) => {
  const code = url.searchParams.get('code')
  if (!code) {
    throw redirect( 302, '/')
  }

  const authenticationData = await apiAxios.post('/session/token', {code}).catch((err) => {
    throw redirect( 302, '/')
  })

  if (!authenticationData) {
    throw redirect( 302, '/')
  }

  const sessionToken = authenticationData.data.data.access_token

  cookies.set('session', sessionToken, {
    path: '/',
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    httpOnly: true,
    sameSite: 'lax',
  })
  
  throw redirect( 302, '/')
}
