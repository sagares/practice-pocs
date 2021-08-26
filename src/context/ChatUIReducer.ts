import {
    SET_HEADER_ACTIONS
} from "./actions";

const ChatUIReducer = (state, action) => {
    switch(action.type) {
        case SET_HEADER_ACTIONS: 
            return {
                ...state,
                actionItems: {
                    ...state.actionItems,
                    [action.payload.type]: action.payload.items
                }
            }

        default: return state;
    }
}

export default ChatUIReducer;