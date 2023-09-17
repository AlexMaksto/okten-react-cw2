import {useContext, useEffect} from "react";
import {ThemeContext} from "../../hok";

const Theme = () => {
    const {themeContext, setThemeContext} = useContext(ThemeContext)
    const toggleTheme = () => {
        if (themeContext === 'light') {
            setThemeContext('dark');
        } else {
            setThemeContext('light');
        }
    };

    useEffect(() => {
        document.body.className = themeContext;
    }, [themeContext]);

    return (
        <div>
            <button type="button" onClick={toggleTheme} className={`${themeContext}Theme`}>
                {themeContext === 'light' ? 'Go to the dark side' : 'Go to the light side'}</button>
        </div>
    );
};

export {Theme};