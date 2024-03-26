/**
 * @TODO: Define all the actions (creator) for the authUser state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';

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
        try {
            const token = await api.login({ id, password });
            api.putAccessToken(token);
            const authUser = await api.getOwnProfile();

            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncUnsetAuthUser() {
    return (dispatch) => {
        dispatch(unsetAuthUserActionCreator());
        api.putAccessToken('');
    };
}

export { setAuthUserActionCreator, unsetAuthUserActionCreator, asyncSetAuthUser, asyncUnsetAuthUser };
