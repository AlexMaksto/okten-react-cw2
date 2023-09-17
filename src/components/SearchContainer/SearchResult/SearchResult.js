import {useSelector} from "react-redux";
import css from "../../../styles/MovieList.module.css";
import {Pagination} from "../../Pagination/Pagination";
import {MovieInfo} from "../../MoviesContainer/MoviesList/MovieInfo/MovieInfo";

const SearchResult = () => {
    const {movies} = useSelector(state => state.movies);

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
    SearchResult
};