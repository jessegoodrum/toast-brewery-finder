import UserDetails from "../Users/UserDetails"

export default function UserHome(props){
    const {userName, userId, avatar} = props;
    return(
        <div>
        <h1 className="welcome">Hello {userName}</h1>
        <UserDetails username={userName} userId={userId} userpic={avatar}/>
        </div>
    )
}

