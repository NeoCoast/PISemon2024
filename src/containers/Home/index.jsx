// index.jsx

import { useEffect, useState, useCallback } from 'react';
import Select from 'react-select';

import PokemonList from '../../components/PokemonList';
import api from '../../api/pokeApi';
import arrow from '../../assets/arrow.png';

import './styles.scss';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [itemsLimit, setItemsLimit] = useState(50);
  const [error, setError] = useState(false);

  const itemsLimitOptions = [
    { label: 'view 10 items', value: 10 },
    { label: 'view 50 items', value: 50 },
    { label: 'view 100 items', value: 100 },
  ];

  const getPokemonList = useCallback(async (newPageNumber = 0) => {
    setPokemonList([]);
    setIsLoading(true);
    setError(false);
    setPageNumber(newPageNumber);

    try {
      const { results }  = await api.getAllPokemons(newPageNumber, itemsLimit);

      if (results) {
        await Promise.all(
          results.map(async ({ name: identifier }) => {
            const {
              id, 
              name, 
              types, 
              sprites: { front_default: image },
            } = await api.getPokemon(identifier);
            
            setPokemonList((prev) => [
              ...prev,
              {
                id,
                name,
                types: types?.map(({ type }) => type.name) || [],
                image,
              },
            ].sort((a, b) => a.id - b.id));
          })
        );
      }
    } catch {
      setError(true);
    }

    setIsLoading(false);
  }, [itemsLimit]);

  useEffect(() => {
    getPokemonList();
  }, [getPokemonList]);

  return (
    <div className="home">
      <div className="home__content">
        {!error && (
          <div className="home__controllers">
            <div className="home__selector">
              <Select
                defaultValue={{ label: 'view 50 items', value: 50 }}
                className="home__selector-input"
                options={itemsLimitOptions}
                onChange={({ value }) => setItemsLimit(value)}
                isSearchable={false}
                isDisabled={isLoading}
              />
            </div>
            <div className="home__pages">
              {pageNumber > 0 && (
                <button
                  className="home__button"
                  onClick={() => getPokemonList(pageNumber - 1)}
                  type="button"
                  disabled={isLoading}
                >
                  <img
                    src={arrow}
                    className="home__img--rotated"
                    alt="Arrow"
                    height={20}
                    width={20}
                  />
                  previous
                </button>
              )}
              <button
                className="home__button"
                onClick={() => getPokemonList(pageNumber + 1)}
                type="button"
                disabled={isLoading}
              >
                next
                <img className="home__img" src={arrow} alt="Arrow" width={20} />
              </button>
            </div>
          </div>
        )}

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
