import "./css/Bart.css";
import bartImg from "../assets/Bart.png";
import { Message } from "../types/Message";
import { useContext } from "react";
import MessagesContext, {
  MessagesContextType
} from "../contexts/MessagesContext";

export default function Bart() {
  const context = useContext<MessagesContextType>(MessagesContext);

  const messages = context.messages;
  const setMessages = context.setMessages!;

  //retourne une phrase au hasard
  function getRandomBartQuote(): string {
    const bartSimpsonQuotes: string[] = [
      "Ay caramba!",
      "Cowabunga!",
      "Ça craint !",
      "Trop cool, mec !",
      "Je me tire d’ici !"
    ];
    const randomIndex: number = Math.floor(
      Math.random() * bartSimpsonQuotes.length
    );
    return bartSimpsonQuotes[randomIndex];
  }

  //fonction appelée lorsque le bouton est cliqué
  function saySomething(): void {
    const message: Message = {
      content: getRandomBartQuote(),
      date: new Date()
    };

    setMessages([...messages, message]);
  }

  return (
    <>
      <div className="Bart">
        <h1>Bart</h1>
        <img src={bartImg} />
        <button onClick={() => saySomething()}>Parle à Homer</button>
      </div>
    </>
  );
}
