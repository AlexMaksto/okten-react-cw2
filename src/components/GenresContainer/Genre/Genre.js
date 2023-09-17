import {useContext} from "react";
import {ThemeContext} from "../../../hok";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import css from "../../../styles/MovieInfo.module.css";

const Genre = ({genre}) => {
    const {themeContext} = useContext(ThemeContext)
    const {name} = genre;
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`../genre/${genre.id}`)
    };

    return (
        <div className={classNames(css.MovieInfo, `${themeContext}MovieInfo`)}>
            <button onClick={handleClick}>
                <div>{name}</div>
            </button>
        </div>
    );
};

export {
    Genre
};