import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {MovieInfo} from "./MovieInfo/MovieInfo";
import css from "../../../styles/MovieList.module.css";
import {useDispatch, useSelector} from "react-redux";
import {moviesActions} from "../../../redux";
import {Pagination} from "../../Pagination/Pagination";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movies);

    const [searchParams, ] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;

    useEffect(() => {
        dispatch(moviesActions.all(currentPage))
    }, [dispatch, currentPage]);

    return (
        <div>
            <div className={css.MovieList}>
                {movies?.map(movie => <MovieInfo movie={movie} key={movie.id}/>)}
            </div>
            <Pagination/>
        </div>
    );

};

export {MoviesList};