import {SearchForm} from "./SearchForm/SearchForm";
import {SearchResults} from "./SearchResults/SearchResults";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {MoviesList} from "../MoviesContainer/MoviesList/MoviesList";

const SearchContainer = () => {
    const {isLoading, errors} = useSelector(state => state.genres);

    const [params,] = useSearchParams();

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <SearchForm/>
            {!!params.get('query') ? <SearchResults/> : <MoviesList/>}
        </div>
    );
};

export {
    SearchContainer
};