import {NavLink} from "react-router-dom";
import css from '../../styles/Header.module.css'
import '../../styles/dark.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {Theme} from "../Theme/Theme";
import {useContext} from "react";
import {ThemeContext} from "../../hok";
import classNames from "classnames";

const Header = () => {
   const {themeContext} = useContext(ThemeContext)

    return (
        <div className={classNames(css.Header, `${themeContext}Header`)}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'}>Search</NavLink>
            <UserInfo/>
            <Theme/>
        </div>
    );
};

export {Header};