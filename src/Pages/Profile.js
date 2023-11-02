import { ChangeProfile } from "./ChangeProfile"

export const Profile = (props) => {
    return <div>
        This is Profile Page of User: {props.username}
        <ChangeProfile setUsername={props.setUsername}/>
        </div>
}