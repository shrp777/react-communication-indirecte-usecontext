import { createContext } from "react";
import { Message } from "../types/Message";

export type MessagesContextType = {
  messages: Array<Message>;
  setMessages?: (messages: Array<Message>) => void;
};

const MessagesContext = createContext<MessagesContextType>({ messages: [] });

export default MessagesContext;
