import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {MovieListCardView} from "./MoviesListCardView/MovieListCardView";
import {moviesActions} from "../../../redux";


const MoviesListCard = () => {
    const {isLoading, errors} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const {id} = useParams()

    useEffect(() => {
        dispatch(moviesActions.getId(id))
    }, [dispatch, id]);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            {!isLoading && <MovieListCardView/>}
        </div>
    );
};

export {MoviesListCard};