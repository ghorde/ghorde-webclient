import { apiAxios } from "$lib/helpers/axios";
import type {Handle} from "@sveltejs/kit"

export const handle: Handle = async ({ event, resolve }) => {
  
  const code = event.cookies.get('session')

  if (!code || code === '') {
    return await resolve(event);
  }

  const userData = await apiAxios.post('user/info', JSON.stringify({code})).catch((err) => {
    console.log(err)
    return;
  })
  if (!userData) {
    event.cookies.set('session', '', {
      path: '/',
      expires: new Date(0),
    })
    return resolve(event);
  }
  if (!userData.data.data.id) {
    event.cookies.set('session', '', {
      path: '/',
      expires: new Date(0),
    })
    return resolve(event);
  }

  const user = userData.data.data

  event.locals.user = {
    id: user.id,
    name: user.name,
    displayName: user.name,
    avatar: user.avatar,
    banner: user.banner,
  }

  return await resolve(event);
}