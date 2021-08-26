import { createContext } from "react";
import { ChatUIContextType } from "../types/ContextTypes";

const ChatUIContext = createContext<Partial<ChatUIContextType>>({});

export default ChatUIContext;