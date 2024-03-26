/**
 * @TODO: Define all the actions (creator) for the isPreLoad state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';

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
    };
}

export { setIsPreloadActionCreator, asyncPreloadProcess };
