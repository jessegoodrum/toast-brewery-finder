import {Link} from 'react-router-dom'
import {useStore} from "react-redux"
import BrewerHome from './BrewerHome';
import AdminHome from './AdminHome';
import UserHome from './UserHome';

function Home(props) {
    //TODO: get rest of user info passed in with current user (avatar, ROLE, and attached brewery info if a Brewer) New GET?
    const store = useStore();
    const authority = store.getState().user.authorities;
    let role = ''
    const {username, id, avatar} = store.getState().user

    authority.map( (auth) => {
        role = auth.name
    });


    return(
        <div className='homePage'>
           {role === 'ROLE_BREWER' && <BrewerHome userName = {username} avatar = {avatar} />}
           {role === 'ROLE_USER' && <UserHome userName = {username} userId={id} avatar = {avatar} />}
           {role === 'ROLE_ADMIN' && <AdminHome userName = {username} />}
        </div>
    )
}

export default Home;

// <p>brewer should land on brewery info page and see "pending" or "approved" status, and be able to edit brewery info and add beers</p>
// {/*this.state.userRole=== ROLE_BREWER &&*/} 
// <p>Admin landing page should see a list of pending brewery requests to approve</p>
// <p>("select * from brewery where status = pending"?)</p>