import {useEffect, useState} from "react";
import {userService} from "../../services";
import {account} from "../../constans";
import {UserInfoView} from "./UserInfoView/UserInfoView";

const UserInfo = () => {
    const [userInfo, setUserInfo] = useState(null)

    useEffect(() => {
        userService.getUser(account)
            .then(({data}) => setUserInfo(data))
            .catch(e => console.log(e))
    }, []);

    return (
        <div>
            {userInfo && <UserInfoView userInfo={userInfo}/>}
        </div>
    );
};

export {UserInfo};