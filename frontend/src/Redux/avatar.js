import * as ActionTypes from './actionTypes';

export const Avatar = (state = {
    avatar: undefined
}, action) => {
switch (action.type) {
    case ActionTypes.ADD_AVATAR:
        return { ...state, avatar: action.payload }
    
    default:
        return state;
}
}