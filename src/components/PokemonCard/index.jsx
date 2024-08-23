import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './styles.css';

const PokemonCard = ({
  id,
  name,
  types,
  image,
}) => {
  const [type1, type2 = ''] = types;
  const navigate = useNavigate();

  return (
    <button
      aria-hidden="true"
      className="pokemon-card"
      onClick={() => navigate(`/pokemon/${id}`)}
      type="button"
    >
      <div className="pokemon-card-left">
        <p>
          ID: {id}
        </p>
        <p>
          Name: {name}
        </p>
        <p>
          Types:
        </p>
        <p>
          {`- ${type1}`}
        </p>
        {type2 && <p>{`- ${type2}`}</p>}
      </div>
      <img
        className="pokemon-card-image"
        src={image}
        alt={name}
        width="200"
        height="200"
      />
    </button>
  );
};

PokemonCard.propTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  types: propTypes.arrayOf(propTypes.string).isRequired,
  image: propTypes.string.isRequired,
};

export default PokemonCard;
