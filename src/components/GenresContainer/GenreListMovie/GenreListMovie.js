import {useDispatch, useSelector} from "react-redux";
import {useParams, useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../../redux";
import css from "../../../styles/MovieList.module.css";
import {Pagination} from "../../Pagination/Pagination";
import {MovieInfo} from "../../MoviesContainer/MoviesList/MovieInfo/MovieInfo";

const GenreListMovie = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const {genresId} = useParams();

    const [searchParams, ] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    useEffect(() => {
        dispatch(moviesActions.getGenresMovie({page: currentPage, genresId}))
    }, [dispatch, currentPage, genresId]);

    return (
        <div>
            <div className={css.MovieList}>
                {movies?.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export {
    GenreListMovie
};