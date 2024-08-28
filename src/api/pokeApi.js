const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const fetchWrapper = async (url, options = {}) => {
  const response = await fetch(`${baseURL}${url}`, {
    headers: { ...defaultHeaders, ...options.headers },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

const getAllPokemons = async (pageNumber, limit) => {
  const url = `?offset=${pageNumber * limit}&limit=${limit}`;

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
