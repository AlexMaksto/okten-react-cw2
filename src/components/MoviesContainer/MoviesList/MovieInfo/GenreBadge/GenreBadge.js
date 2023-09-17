import {useState, useEffect} from "react";
import {genresService} from "../../../../../services";


const GenreBadge = ({genre_ids}) => {
    const [genreName, setGenreName] = useState([])
    useEffect(() => {
        genresService.getAll()
            .then(({data}) => setGenreName(data.genres))
            .catch(e => console.log(e))
    }, []);

    const getGenreNames = () => {
        if (!genre_ids) return [];

        return genre_ids.map(genreId => {
            const genre = genreName.find(genre => genre.id === genreId);
            return genre ? genre.name : '';
        });
    };

    const movieGenres = getGenreNames().join(', ');

    return (
        <div>
            <div>{movieGenres}</div>
        </div>
    );
};

export {GenreBadge};