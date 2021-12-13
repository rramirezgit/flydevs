import axios from 'axios';

export const getData = async () => {
  const url = `/pokeApi`;
  return await axios.get(url);
};
