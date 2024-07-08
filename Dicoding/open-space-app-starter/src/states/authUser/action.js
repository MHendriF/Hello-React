/**
 * @TODO: Define all the actions (creator) for the authUser state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function setAuthUserActionCreator(authUser) {
    return {
        type: ActionType.SET_AUTH_USER,
        payload: {
            authUser,
        },
    };
}

function unsetAuthUserActionCreator() {
    return {
        type: ActionType.UNSET_AUTH_USER,
        payload: {
            authUser: null,
        },
    };
}

function asyncSetAuthUser({ id, password }) {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            const token = await api.login({ id, password });
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();
            console.log(authUser);
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(showLoading());
        dispatch(unsetAuthUserActionCreator());
        api.putAccessToken('');
        dispatch(hideLoading());
    };
}

export { setAuthUserActionCreator, unsetAuthUserActionCreator, asyncSetAuthUser, asyncUnsetAuthUser };
