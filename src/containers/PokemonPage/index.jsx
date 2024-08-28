import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RotatingLines } from 'react-loader-spinner';

import PokemonCard from '../../components/PokemonCard';
import NotFound from '../../components/NotFound';

import api from '../../api/pokeApi';
import arrow from '../../assets/arrow.png';

import './styles.scss';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  const getPokemonById = async (pokemonId) => {
    setPokemon(null);
    setIsLoading(true);

    try {
      const data  = await api.getPokemon(pokemonId);

      if (data) {
        const {
          id,
          name,
          types,
          sprites: { front_default: image },
        } = data;
        
        setPokemon({
          id,
          name,
          types: types?.map(({ type }) => type.name) || [],
          image: image || '',
        });
      }
    } catch {
      console.log('Error al obtener el pokemon');
    }

    setIsLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pokemon-page" >
        <RotatingLines
          visible
          height="80"
          width="80"
          strokeColor="#2581a8"
        />
      </div>
    );
  }

  return (
    <div className="pokemon-page">
      {pokemon ? (
        <div className="pokemon-page__row-container">
          <div className="pokemon-page__row">
            {Number(id) - 1 > 0 && (
              <div
                aria-hidden="true"
                className="pokemon-page__img-container"
                onClick={() => navigate(`/pokemon/${Number(id) - 1}`)}
              >
                <img
                  className="pokemon-page__img pokemon-page__img--rotated"
                  src={arrow}
                  alt="Arrow"
                  height={20}
                  width={20}
                />
              </div>
            )}
            <PokemonCard {...pokemon} />
            <div
              aria-hidden="true"
              className="pokemon-page__img-container"
              onClick={() => navigate(`/pokemon/${Number(id) + 1}`)}
            >
              <img
                className="pokemon-page__img"
                src={arrow}
                alt="Arrow"
                height={20}
                width={20}
              />
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PokemonPage;
