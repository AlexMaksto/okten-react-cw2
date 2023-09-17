import StarRatings from "react-star-ratings/build/star-ratings";

const StarsRating = ({vote_average}) => {

    return (
        <div>
            <StarRatings
                rating={vote_average}
                starRatedColor="red"
                numberOfStars={10}
                name='rating'
                starDimension="15px"
            />
        </div>
    );
};

export {StarsRating};