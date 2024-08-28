import { useEffect, useState } from 'react';

import PokemonList from '../../components/PokemonList';
import api from '../../api/pokeApi';

import './styles.scss';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [error, setError] = useState(false);

  const getPokemonList = async () => {
    setIsLoading(true);
    setError(false);

    try {
      const { results } = await api.getAllPokemons();

      if (results) {
        const allPokemonDetails = await Promise.all(
          results.map(async ({ name: identifier }) => {
            const {
              id,
              name,
              types,
              sprites: { front_default: image },
            } = await api.getPokemon(identifier);

            return {
              id,
              name,
              types: types?.map(({ type }) => type.name) || [],
              image,
            };
          })
        );

        setPokemonList(allPokemonDetails.sort((a, b) => a.id - b.id));
      }
    } catch {
      setError(true);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonList();
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        <PokemonList 
          pokemonList={pokemonList}
          isLoading={isLoading}
          error={error}
        />
      </div>
    </div>
  );
};

export default Home;
