import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import PokemonCard from '../../components/PokemonCard';
import NotFound from '../../components/NotFound';

import arrow from '../../assets/arrow.png';

import './styles.scss';

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const isIdEven = useMemo(() => id % 2 === 0, [id]);

  useEffect(() => {
    if(!id || isNaN(id)) return;

    setPokemon( // hardcoded pokemons
      {
        id,
        name: isIdEven ? 'Pikachu' : 'Charmander',
        types: isIdEven ? ['Electric', 'Fire'] : ['Water', 'Grass'],
        image: isIdEven ? 'https://i.pinimg.com/236x/3f/72/2e/3f722e7be5a952584063a35048820e89.jpg' : 'https://i.pinimg.com/550x/f4/89/dd/f489dd69985595edd68947d4415241e1.jpg',
      }
    )
  }, [id, isIdEven]);

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
