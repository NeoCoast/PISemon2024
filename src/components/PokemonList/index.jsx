import propTypes from 'prop-types';
import { RotatingLines } from 'react-loader-spinner';

import PokemonCard from '../PokemonCard';

import './styles.scss';

const PokemonList = ({
  pokemonList = [],
  isLoading,
  error, 
}) => {
  if (error) {
    return (
      <div className="pokemon-list__error">Error al obtener la lista de pokemon</div>
    )
  }

  return (
    isLoading ? (
      <div className="pokemon-list__loading">
        <RotatingLines
          visible
          height="80"
          width="80"
          strokeColor="#2581a8"
        />
      </div>
    ) : (
      <div className="pokemon-list">
        {pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)}
      </div>
    )
  )
};

PokemonList.propTypes = {
  pokemonList: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    types: propTypes.arrayOf(propTypes.string),
    image: propTypes.string,
  })),
  isLoading: propTypes.bool,
  error: propTypes.bool,
};

PokemonList.defaultProps = {
  pokemonList: [],
};

export default PokemonList;
