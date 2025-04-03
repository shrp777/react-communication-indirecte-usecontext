import { useContext } from "react";
import "./css/Homer.css";
import homerImg from "../assets/Homer.png";
import MessagesContext, {
  MessagesContextType
} from "../contexts/MessagesContext";

export default function Homer() {
  const { messages } = useContext<MessagesContextType>(MessagesContext);

  function formatToFrenchDate(date: Date): string {
    return date.toLocaleString("fr-FR", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  return (
    <>
      <div className="Homer">
        <h1>Homer</h1>
        <img src={homerImg} />

        <ul>
          {messages.map((message) => (
            <li>
              Bart a dit : "{message.content}" <br /> (
              {formatToFrenchDate(message.date)})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
