import { ChangeProfile } from "./ChangeProfile"
import { useContext } from 'react';
import { AppContext } from '../App';

export const Profile = () => {
    const { username, setUsername  } = useContext(AppContext);

    return <div>
        This is Profile Page of User: {username}
        <ChangeProfile setUsername={setUsername}/>
        </div>
}