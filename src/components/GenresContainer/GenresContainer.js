import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../redux";
import {Genres} from "./Genres/Genres";

const GenresContainer = () => {
    const {isLoading, errors} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.all())
    }, [dispatch]);

    return (
        <div>
            {isLoading && <h1>Loading...</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <Genres/>
        </div>
    );
};

export {
    GenresContainer
};