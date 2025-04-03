import { useState } from "react";
import "./css/Homer.css";
import Bart from "./Bart";
import homerImg from "../assets/Homer.png";
import { Message } from "../types/Message";

export default function Homer() {
  const [receivedMessages, setReceivedMessages] = useState<Array<Message>>([]);

  function whenMessageReceived(message: Message): void {
    console.log(message);
    setReceivedMessages([...receivedMessages, message]);
  }

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
        <div>
          <h1>Homer</h1>
          <img src={homerImg} />

          <ul>
            {receivedMessages.map((message) => (
              <li>
                Bart a dit : "{message.content}" <br /> (
                {formatToFrenchDate(message.date)})
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Bart callFatherFunction={whenMessageReceived} />
        </div>
      </div>
    </>
  );
}
