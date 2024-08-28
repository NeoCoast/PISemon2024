import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Header from '../../components/Header';
import Home from '../Home';
import PokemonPage from '../PokemonPage';
import NotFound from '../../components/NotFound';

const MainRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<Home />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      {/* Add the not found route at the end */}
      <Route path="*" element={<NotFound isRouteNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default MainRouter;
