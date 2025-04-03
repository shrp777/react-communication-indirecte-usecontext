import { useState } from "react";
import "./App.css";
import Bart from "./components/Bart";
import Homer from "./components/Homer";
import MessagesContext from "./contexts/MessagesContext";
import { Message } from "./types/Message";

function App() {
  const [messages, setMessages] = useState<Array<Message>>([]);

  return (
    <>
      <MessagesContext.Provider
        value={{ messages: messages, setMessages: setMessages }}
      >
        <Homer />
        <Bart />
      </MessagesContext.Provider>
    </>
  );
}

export default App;
