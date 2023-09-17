import {useSearchParams} from "react-router-dom";

const SearchForm = () => {
    const [, setSearchParams] = useSearchParams();

    let searchRequest;

    const handleInputChange = (e) => {
        searchRequest = e.target.value;
    };

    const handleSubmit = (e) => {
        console.log(searchRequest)
        e.preventDefault();
        setSearchParams({query: searchRequest});
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};

export {
    SearchForm
};