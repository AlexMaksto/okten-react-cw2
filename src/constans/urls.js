const baseURL = process.env.REACT_APP_API_BASE_URL;
const serverURL = '/3';
const movies = `${serverURL}/discover/movie`;
const movie = `${serverURL}/movie`;
const genres = `${serverURL}/genre/movie/list`;
const account = `${serverURL}/account`;
const search = `${serverURL}/search/movie`
const imagURL = 'https://image.tmdb.org/t/p/original';

const urls = {
    movies: {
        page: (page) => `${movies}?page=${page}`
    },
    movie: {
        byId: (id) => `${movie}/${id}`
    },
    moviesGenres: {
        genres: (page, genresId) => `${movies}?page=${page}&with_genres=${genresId}`
    },
    genres,
    search: {
        search: (page, query) => `${search}?page=${page}&query=${query}`
    },
    account: {
        byId: (id) => `${account}/${id}`
    }
}

export {
    baseURL,
    urls,
    imagURL
}
