import {apiService} from "./apiService";
import {urls} from "../constans";

const userService = {
    getUser: (id) => apiService.get(urls.account.byId(id))
}

export {
    userService
}