import {useDispatch} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {moviesActions} from "../../../redux";
import {SearchResult} from "../SearchResult/SearchResult";

const SearchResults = () => {
    const dispatch = useDispatch();

    const [searchParams,] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const query = searchParams.get('query')

    useEffect(() => {
        dispatch(moviesActions.search({page: currentPage, query}))
    }, [dispatch, currentPage, query]);


    return (
        <div>
            <SearchResult/>
        </div>
    );
};

export {
    SearchResults
};