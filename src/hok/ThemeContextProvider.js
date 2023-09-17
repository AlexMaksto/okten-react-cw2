import {createContext, useState} from "react";

const ThemeContext = createContext(null);
const ThemeContextProvider = ({children}) => {
    const [themeContext, setThemeContext] = useState('light');
    return (
        <ThemeContext.Provider value={{themeContext, setThemeContext}}>
            {children}
        </ThemeContext.Provider>
    );
};

export {
    ThemeContextProvider,
    ThemeContext
};