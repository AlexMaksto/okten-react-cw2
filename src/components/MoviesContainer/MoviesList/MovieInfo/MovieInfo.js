import {useNavigate} from "react-router-dom";
import css from "../../../../styles/MovieInfo.module.css"
import "../../../../styles/dark.css"
import {PosterPreview} from "./PosterPreview/PosterPreview";
import {GenreBadge} from "./GenreBadge/GenreBadge";
import {StarsRating} from "./StarsRating/StarsRating";
import {useContext} from "react";
import classNames from "classnames";
import {ThemeContext} from "../../../../hok";

const MovieInfo = ({movie}) => {
    const {themeContext} = useContext(ThemeContext)
    const {original_title, vote_average, genre_ids, poster_path} = movie;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`../movie/${movie.id}`)
    };

    return (
        <div className={classNames(css.MovieInfo, `${themeContext}MovieInfo`)}>
            <button onClick={handleClick}>
                <PosterPreview poster_path={poster_path} original_title={original_title} height={'150px'}/>
                <div>{original_title}</div>
                <GenreBadge genre_ids={genre_ids}/>
                <StarsRating vote_average={vote_average}/>
            </button>
        </div>
    );
};

export {
    MovieInfo
};