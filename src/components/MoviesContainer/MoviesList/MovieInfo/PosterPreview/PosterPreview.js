import {imagURL} from "../../../../../constans";

const PosterPreview = ({poster_path, original_title, height}) => {

    return (
        <div>
            <img src={imagURL + poster_path} alt={original_title} height={height}/>
        </div>
    );
};

export {PosterPreview};