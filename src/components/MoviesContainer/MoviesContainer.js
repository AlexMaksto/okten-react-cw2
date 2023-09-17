import {useSelector} from "react-redux";
import {MoviesList} from "./MoviesList/MoviesList";

const MoviesContainer = () => {
    const {isLoading, errors} = useSelector(state => state.movies);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            {<MoviesList/>}
        </div>
    )
};

export {
    MoviesContainer
}