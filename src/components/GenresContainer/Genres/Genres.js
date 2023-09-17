import {useSelector} from "react-redux";
import css from "../../../styles/MovieList.module.css";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const {genres} = useSelector(state => state.genres);

    return (
        <div>
            <div className={css.MovieList}>
                {genres?.map(genre => <Genre genre={genre} key={genre.id}/>)}
            </div>
        </div>
    );
};

export {
    Genres
};