import css from "../../../styles/UserInfo.module.css";
import gravatar from "gravatar";
import {PosterPreview} from "../../MoviesContainer/MoviesList/MovieInfo/PosterPreview/PosterPreview";
const UserInfoView = ({userInfo}) => {

    const avatar =
        userInfo.avatar.tmdb.avatar_path
            ?
            <PosterPreview poster_path={userInfo.avatar.tmdb.avatar_path} original_title={'user photo'}
                            height={'40px'}/>
            :
            <img src={gravatar.url(userInfo.avatar.gravatar.hash, {s: '40', r: 'g'})} alt={'user'}/>

    return (
        <div>
            <div className={css.UserInfo}>
                <div>{userInfo.username}</div>
                {avatar}
            </div>
        </div>
    );
};

export {UserInfoView};