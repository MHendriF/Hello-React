/**
 * @TODO: Define all the actions (creator) for the talkDetail state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';

function receiveTalkDetailActionCreator(talkDetail) {
    return {
        type: ActionType.RECEIVE_TALK_DETAIL,
        payload: {
            talkDetail,
        },
    };
}

function clearTalkDetailActionCreator() {
    return {
        type: ActionType.CLEAR_TALK_DETAIL,
    };
}

function toggleLikeTalkDetailActionCreator(userId) {
    return {
        type: ActionType.TOGGLE_LIKE_TALK_DETAIL,
        payload: {
            userId,
        },
    };
}

function asyncReceiveTalkDetail(talkId) {
    return async (dispatch) => {
        dispatch(clearTalkDetailActionCreator());
        try {
            const talkDetail = await api.getTalkDetail(talkId);
            dispatch(receiveTalkDetailActionCreator(talkDetail));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncToogleLikeTalkDetail() {
    return async (dispatch, getState) => {
        const { authUser, talkDetail } = getState();
        dispatch(toggleLikeTalkDetailActionCreator(authUser.id));

        try {
            await api.toggleLikeTalk(talkDetail.id);
        } catch (error) {
            alert(error.message);
        }
    };
}

export {
    receiveTalkDetailActionCreator,
    clearTalkDetailActionCreator,
    toggleLikeTalkDetailActionCreator,
    asyncReceiveTalkDetail,
    asyncToogleLikeTalkDetail,
};
