export const GET_USER = 'GET_USER';
export const GET_USERS = 'GET_USERS';
export const GET_NEW_USER = 'GET_NEW_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const getUser = (value) => {
    return {type: GET_USER, payload: value};
};

export const getUsers = (value) => {
    return {type: GET_USERS, payload: value};
};

export const getNewUser = (value) => {
    return {type: GET_NEW_USER, payload: value};
};

export const deleteUser = (value) => {
    return {type: DELETE_USER, payload: value};
};

export const updateUser = (value) => {
    return {type: UPDATE_USER, payload: value};
};
