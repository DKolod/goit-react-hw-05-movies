import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

export default function MoviesList({ films }) {
  const location = useLocation();
  return (
    <ul className={css.FilmList}>
      {films.map(film => (
        <li key={film.id} className={css.FilmItem}>
          <Link
            to={`/movies/${film.id}`}
            state={{ from: location }}
            className={css.FilmLink}
          >
            <img
              className={css.FilmImage}
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt={film.title}
            />
            <p className={css.FilmTitle}>{film.original_title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
