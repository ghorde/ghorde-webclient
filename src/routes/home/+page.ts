export const load = () => {
  const token = localStorage.getItem("access_token");

  return {token}
}