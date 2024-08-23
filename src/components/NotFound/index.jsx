import pikachu from '../../assets/pikachu.webp';

import './styles.css';

const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src={pikachu}
        alt="Pikachu"
        className="not-found-image"
      />
      <p className="not-found-text">Pokemon Not Found</p>
    </div>
  );
};

export default NotFound;
