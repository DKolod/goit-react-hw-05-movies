import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../servise/Api';
import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState();
  const { movieId } = useParams();
  // const movieId = useOutletContext();

  useEffect(() => {
    getMovieCast(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.CastList}>
      {cast &&
        cast.map(({ id, profile_path, name }) => (
          <li key={id} className={css.ListItems}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : 'Ups'
              }
              alt={name}
              width="100"
            />
            <p>{name}</p>
          </li>
        ))}
    </ul>
  );
}
