import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";

import {router} from './router';
import './styles/index.css';
import './styles/dark.css'
import {ThemeContextProvider} from "./hok";
import {Provider} from "react-redux";
import {store} from "./redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeContextProvider>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </ThemeContextProvider>
);