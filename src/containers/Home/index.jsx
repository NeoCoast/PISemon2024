import { useEffect, useState, useCallback } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import Select from 'react-select';

import PokemonList from '../../components/PokemonList';
import api from '../../api/pokeApi';
import arrow from '../../assets/arrow.png';

import './styles.css';

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
      const res = await api.getAllPokemons(newPageNumber, itemsLimit);

      if (res.data.results) {
        await Promise.all(
          res.data.results.map(async ({ name }) => {
            const { data: pokemon } = await api.getPokemon(name);
            setPokemonList((prev) => [
              ...prev,
              {
                id: pokemon.id,
                name: pokemon.name,
                types: pokemon.types?.map(({ type }) => type.name) || [],
                image: pokemon.sprites?.front_default || '',
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
      <div className="home-content">
        <div className="content-controllers">
          <div className="content-selector">
            <Select
              defaultValue={{ label: 'view 50 items', value: 50 }}
              className="selector-input"
              options={itemsLimitOptions}
              onChange={({ value }) => setItemsLimit(value)}
              isSearchable={false}
            />
          </div>
          <div className="content-pages">
            {pageNumber > 0 && (
              <button
                className="content-buttons"
                onClick={() => getPokemonList(pageNumber - 1)}
                type="button"
              >
                <img
                  src={arrow}
                  className="rotated-img"
                  alt="Arrow"
                  height={20}
                  width={20}
                />
                previous
              </button>
            )}
            <button
              className="content-buttons"
              onClick={() => getPokemonList(pageNumber + 1)}
              type="button"
            >
              next
              <img className="arrow" src={arrow} alt="Arrow" width={20} />
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="content-loading">
            <RotatingLines
              visible
              height="80"
              width="80"
              strokeColor="#2581a8"
            />
          </div>
        ) : error ? (
          <div className="content-error">Error al obtener la lista de pokemon</div>
        ) : (
          <PokemonList pokemonList={pokemonList} />
        )}
      </div>
    </div>
  );
};

export default Home;
