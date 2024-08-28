export const baseURL = import.meta.env.VITE_POKEAPI_BASE_URL;

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const fetchWrapper = async (url = '') => {
  const response = await fetch(`${baseURL}${url}`, {
    headers,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const getAllPokemons = async (pageNumber, limit) => {
  const url = `?offset=${pageNumber * limit}&limit=2000`; // hardcoded limit to get all pokemons

  return fetchWrapper(url);
};

const getPokemon = async (id) => {
  return fetchWrapper(id);
};

const methods = {
  getAllPokemons,
  getPokemon,
};

export default methods;
