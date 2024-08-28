import propTypes from 'prop-types';
import classnames from 'classnames';

import pikachu from '../../assets/pikachu.webp';

import './styles.scss';

const NotFound = ({
  isRouteNotFound,
}) => {
  const text = isRouteNotFound ? 'This page does not exist' : 'Pokemon Not Found';

  return (
    <div className={classnames('not-found', 
      { 'not-found--route': isRouteNotFound }
    )}>
      <img
        src={pikachu}
        alt="Pikachu"
        className="not-found__image"
      />
      <p className="not-found__text">{text}</p>
    </div>
  );
};

NotFound.propTypes = {
  isRouteNotFound: propTypes.bool,
};

export default NotFound;
