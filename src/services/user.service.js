import axios from 'axios';

import {deleteUser, getUser, getUsers, updateUser} from '../redux/actions';

const userUrl = '/users';

const instance = axios.create({
    baseURL: 'http://localhost:5000',
})

const getAllUsers = () => (dispatch) => {
    instance
        .get(userUrl)
        .then(value => dispatch(getUsers(value.data)))
        .catch(e => console.log(e))
}

const createUser = async (user) => (dispatch) => {
    instance
        .post(userUrl, user)
        .then(value => dispatch(getUser(value.data)))
        .catch(e => console.log(e))
};


export const deleteUserById = (id) => (dispatch) => {
    instance
        .delete(userUrl + "/" + id)
        .then(value => dispatch(deleteUser(id)))
        .catch(e => console.log(e))
};

export const updateUserById = (user, id) => (dispatch) => {
    instance
        .put(userUrl + "/" + id, user)
        .then(value => dispatch(updateUser(value.data)))
        .catch(e => console.log(e))
};

export {getAllUsers, createUser};
