import propTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

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
      <div className="pokemon-card__left">
        <p>
          ID: <strong>{id}</strong>
        </p>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>
          Types:
        </p>
        <strong>
          {`• ${type1}`}
        </strong>
        {type2 && <><br/><br/><strong>{`• ${type2}`}</strong></>}
      </div>
      <img
        className="pokemon-card__image"
        src={image}
        alt={name}
        width="240"
        height="240"
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
