import React, { useReducer } from "react";
import { ActionItems } from "../types/ContextTypes";
import { SET_HEADER_ACTIONS } from "./actions";
import ChatUIContext from "./ChatUIContext";
import ChatUIReducer from "./ChatUIReducer";

const ChatUIContextProvider = (props) => {
  const initialState = {
    loading: false,
    actionItems: {
        leftActions: [],
        rightActions: []
    }
  };

  const [state, dispatch] = useReducer(ChatUIReducer, initialState);

  const setActionItems = (actionsType: string, actionItems: ActionItems) => {
      dispatch({
        type: SET_HEADER_ACTIONS,
        payload: {
            type: actionsType,
            items: actionItems
        }
    });
  };

  const getActionItems = (type) => {
    return state.actionItems[type + "Actions"];
  };

  return (
    <ChatUIContext.Provider
      value={{
        loading: state.loading,
        actionItems: state.actionItems,
        getActionItems,
        setActionItems,
      }}
    >
      {props.children}
    </ChatUIContext.Provider>
  );
};

export default ChatUIContextProvider;
