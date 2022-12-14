import axios from 'axios';

const KEY = 'dc9731f6582221737efab584c4209646';
const BASE_URL = 'https://api.themoviedb.org/3/';

export async function getPopularMovie() {
  try {
    const responce = await axios.get(
      `${BASE_URL}trending/movie/week?api_key=${KEY}&language='en-US'`
    );
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getSearchMovie(query) {
  try {
    const responce = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&query=${query}&language='en-US'`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieDetails(id) {
  try {
    const responce = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${KEY}&language='en-US'`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieCast(id) {
  try {
    const responce = await axios.get(
      `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language='en-US'`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getMovieReviews(id) {
  try {
    const responce = await axios.get(
      `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language='en-US'`
    );
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
}
