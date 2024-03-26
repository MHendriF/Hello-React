/**
 * @TODO: Define all the actions (creator) for the users state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function receiveUsersActionCreator(users) {
    return {
        type: ActionType.RECEIVE_USERS,
        payload: {
            users,
        },
    };
}

function asyncRegisterUser({ id, name, password }) {
    return async () => {
        dispatch(showLoading());
        try {
            await api.register({ id, name, password });
        } catch (error) {
            alert(error.message);
        }
        dispatch(hideLoading());
    };
}

export { receiveUsersActionCreator, asyncRegisterUser };
