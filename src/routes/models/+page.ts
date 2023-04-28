import { apiAxios } from "$lib/helpers/axios";

export const load = async({params}) => {
  const getModels = async() => {
    const {data} = await apiAxios.get('models');
    return data;
  }
  const models = await getModels();
  return {
      models,
  };
}