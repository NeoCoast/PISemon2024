import { useNavigate } from 'react-router-dom';

import pokemon from '../../assets/pokeball.png';
import './styles.css';

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <img
        className="header-image"
        src={pokemon}
        alt="Homepage"
        onClick={() => navigate('/')}
        height={100}
        width={100}
      />
      <h2 className="header-text">
        Bienvenidos a PISemon
      </h2>
    </div>
  );
};

export default Header;
