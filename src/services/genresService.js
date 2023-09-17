import {apiService} from "./apiService";
import {urls} from "../constans";

const genresService = {
    getAll: () => apiService.get(urls.genres),
    getGenresId: (page, genresId) => apiService.get(urls.moviesGenres.genres(page, genresId))
}

export {
    genresService
}