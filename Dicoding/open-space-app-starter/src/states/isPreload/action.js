/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';
import { setAuthUserActionCreator } from '../../states/authUser/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

function setIsPreloadActionCreator(isPreload) {
    return {
        type: ActionType.SET_IS_PRELOAD,
        payload: {
            isPreload,
        },
    };
}

function asyncPreloadProcess() {
    return async (dispatch) => {
        dispatch(showLoading());
        try {
            // preload process
            const authUser = await api.getOwnProfile();
            dispatch(setAuthUserActionCreator(authUser));
        } catch (error) {
            // fallback process
            dispatch(setAuthUserActionCreator(null));
        } finally {
            // end preload process
            dispatch(setIsPreloadActionCreator(false));
        }
        dispatch(hideLoading());
    };
}

export { setIsPreloadActionCreator, asyncPreloadProcess };
