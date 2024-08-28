import { useNavigate } from 'react-router-dom';
import pokemon from '../../assets/pokeball.png';

import './styles.scss';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="header__image"
        src={pokemon}
        alt="Homepage"
        onClick={() => navigate('/')}
        height={100}
        width={100}
      />
      <h2 className="header__text">
        Bienvenidos a PISemon
      </h2>
    </div>
  );
};

export default Header;
