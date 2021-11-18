import {DELETE_USER, GET_NEW_USER, GET_USER, GET_USERS, UPDATE_USER} from '../actions';

let initialState = { choseUser: {}, users: []};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_NEW_USER: {
            return {...state, newUser: {...action.payload}};
        }

        case GET_USER: {
            return {...state, users: [...state.users, action.payload]}
        }

        case GET_USERS: {
            return {...state, users: [...action.payload]}
        }

        case DELETE_USER: {
            const filter = state.users.filter(user => user._id !== action.payload);

            return {...state, users:[...filter]};
        }

        case UPDATE_USER: {

            return {...state };
        }

        default:
            return state;
    }
};
