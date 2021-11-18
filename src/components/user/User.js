import './User.css';

export default function User({choseUser, user}) {
    const {username, first_name, last_name, email, role} = user;

    return (
        <div onClick={() => choseUser(user)} className={'user'}>
            <div>{username}</div>
            <div>{first_name}</div>
            <div>{last_name}</div>
            <div>{email}</div>
            <div>{role}</div>
        </div>
    );
}
