import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { BiSearchAlt } from 'react-icons/bi';
import { getSearchMovie } from '../../servise/Api';
import css from './MoviesPage.module.css';
import { toast } from 'react-toastify';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Movies() {
  const [value, setValue] = useState('');
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    (() => {
      query &&
        getSearchMovie(query).then(data => {
          if (data.results.length === 0) {
            toast.warning(`Not found!`);
          }
          setFilms(data.results);
        });
    })();
  }, [query]);

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast.error('Empty');
      return;
    }
    setSearchParams({ query: value });
    setValue('');
  };

  return (
    <div>
      <main className={css.Main}>
        <div className={css.Searchbar}>
          <form onSubmit={onHandleSubmit} className={css.SearchForm}>
            <input
              type="text"
              className={css.SearchFormInput}
              placeholder="Search"
              value={value}
              onChange={onHandleChange}
            />

            <button type="submit" className={css.SearchFormButton}>
              <BiSearchAlt size={32} />
            </button>
          </form>
        </div>
        {films && <MoviesList films={films} />}
      </main>
    </div>
  );
}
