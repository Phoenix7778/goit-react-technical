import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../Pages/Home';
import { Tweets } from '../Pages/Tweets';
import { NotFoundPage } from 'Pages/NotFoundPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
