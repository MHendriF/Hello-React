/**
 * @TODO: Define all the actions (creator) for the talks state
 */
import ActionType from '../../utils/actionType';
import api from '../../utils/api';

function receiveTalksActionCreator(talks) {
    return {
        type: ActionType.RECEIVE_TALKS,
        payload: {
            talks,
        },
    };
}

function addTalkActionCreator(talk) {
    return {
        type: ActionType.ADD_TALK,
        payload: {
            talk,
        },
    };
}

function toggleLikeTalkActionCreator({ talkId, userId }) {
    return {
        type: ActionType.TOGGLE_LIKE_TALK,
        payload: {
            talkId,
            userId,
        },
    };
}

function asyncAddTalk({ text, replyTo = '' }) {
    return async (dispatch) => {
        try {
            const talk = await api.createTalk({ text, replyTo });
            dispatch(addTalkActionCreator(talk));
        } catch (error) {
            alert(error.message);
        }
    };
}

function asyncToogleLikeTalk(talkId) {
    return async (dispatch, getState) => {
        const { authUser } = getState();
        dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));

        try {
            await api.toggleLikeTalk(talkId);
        } catch (error) {
            alert(error.message);
            dispatch(toggleLikeTalkActionCreator({ talkId, userId: authUser.id }));
        }
    };
}

export { receiveTalksActionCreator, addTalkActionCreator, toggleLikeTalkActionCreator, asyncAddTalk, asyncToogleLikeTalk };
