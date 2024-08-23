import propTypes from 'prop-types';

import PokemonCard from '../PokemonCard';

import './styles.css';

const PokemonList = ({
  pokemonList = [],
}) => (
  <div className="pokemon-list">
    {pokemonList.map((pokemon) => <PokemonCard key={pokemon.id} {...pokemon} />)}
  </div>
);

PokemonList.propTypes = {
  pokemonList: propTypes.arrayOf(propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    types: propTypes.arrayOf(propTypes.string),
    image: propTypes.string,
  })),
};

PokemonList.defaultProps = {
  pokemonList: [],
};

export default PokemonList;
