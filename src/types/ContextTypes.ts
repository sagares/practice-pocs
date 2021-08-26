import { ActionItemProps } from "./PropTypes"

export type ActionItems = {
    leftActions: Array<ActionItemProps>;
    rightActions: Array<ActionItemProps>;
}

export type ChatUIContextType = {
    loading?: boolean;
    actionItems?: ActionItems;
    getActionItems?: Function;
    setActionItems?: Function
}