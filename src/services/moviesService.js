import {apiService} from "./apiService";
import {urls} from "../constans";

const moviesService = {
    getAll: (pageNum) => apiService.get(urls.movies.page(pageNum)),
    getById: (id) => apiService.get(urls.movie.byId(id)),
    search: (page, query) => apiService.get(urls.search.search(page, query))
}

export {
    moviesService
}