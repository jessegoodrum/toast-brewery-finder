import * as ActionTypes from './actionTypes';

export const User = (state = {
        id: null,
        username: '',
        authorities: [],
        avatar: ''
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, id: action.payload.id, username: action.payload.username, authorities: action.payload.authorities, avatar: action.payload.avatar }
        
        case ActionTypes.DELETE_USER:
            return { ...state, id: null, username: '', authorities: [], avatar: '' }

        default:
            return state;
    }
}