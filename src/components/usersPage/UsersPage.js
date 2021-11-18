import './UsersPage.css';

import {useDispatch, useSelector} from 'react-redux';
import {Route, useHistory} from 'react-router';
import {useEffect} from 'react';

import CreateUserForm from '../createUserForm/CreateUserForm';
import {getAllUsers} from '../../services/user.service';
import {getNewUser} from '../../redux/actions';
import User from '../user/User';

export default function UsersPage() {
    let history = useHistory();
    let state = useSelector(state => state);
    let dispatch = useDispatch();
    let {users} = state;

    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);

    const choseUser = (user) => {
        dispatch(getNewUser(user));
        history.push(`/edit/${user.id}`)
    };

    return (
        <div className={'usersPage'}>
            <div className={'usersPage__header'}>
                <div>USERNAME</div>
                <div>FIRST NAME</div>
                <div>LAST NAME</div>
                <div>EMAIL</div>
                <div>TYPE</div>
            </div>
            <div className={'usersPage__main'}>
                {users && users.map(user => <User key={user.id} user={user} choseUser={choseUser}/>)}
            </div>
            <div>
                <Route path={"/create"} component={CreateUserForm}/>
            </div>
        </div>
    );
}
