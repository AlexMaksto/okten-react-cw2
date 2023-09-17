import css from "../../styles/MovieList.module.css";
import {useSearchParams} from "react-router-dom";
import {minPage, maxPage} from "../../constans";
import {useSelector} from "react-redux";

const Pagination = () => {
    const {total_pages} = useSelector(state => state.movies);
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page')) || 1;
    const maxThisPage = Math.min(total_pages, maxPage);

    const handlePageChange = (newPage) => {
        setSearchParams((prevParams) => {
            return new URLSearchParams({
                ...Object.fromEntries(prevParams.entries()),
                ...{page: newPage},
            });
        })
    };

    return (
        <div>
            <div className={css.Button}>
                {currentPage > minPage && <button onClick={() => handlePageChange(currentPage - 1)}>Prev</button>}
                <span>Page {currentPage} of {maxThisPage}</span>
                {(currentPage < maxThisPage || !currentPage) &&
                    <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>}
            </div>
        </div>
    );

};

export {
    Pagination
};