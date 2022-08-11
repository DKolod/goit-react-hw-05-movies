import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navigation = lazy(() => import('../Navigation/Navigation'));
const Home = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const Movies = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MoviesDetailsPage/MovieDetailsPage.jsx')
);

const Loader = lazy(() => import('../Loader/Loader'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </div>
  );
};
