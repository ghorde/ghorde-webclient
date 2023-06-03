import { apiAxios } from "$lib/helpers/axios";
import type {Handle} from "@sveltejs/kit"
import { get } from "svelte/store";

export const handle: Handle = async ({ event, resolve }) => {
  
  const code = event.cookies.get('session')

  if (!code || code === '') {
    return await resolve(event);
  }

  const userData = await apiAxios.post('/user/info', JSON.stringify({code}))
  if (!userData.data.data) {
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