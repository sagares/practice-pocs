export type ActionItemProps = {
    name: string;
    originalObj?: any;
    actionHandler: Function;
}

export type HeaderProps = {
    type: string;
    text?: string;
    actionItems?: Array<ActionItemProps>
};