import "./css/Bart.css";
import bartImg from "../assets/Bart.png";
import { Message } from "../types/Message";

export type BartParams = {
  callFatherFunction: (message: Message) => void;
};

export default function Bart({ callFatherFunction }: BartParams) {
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
    callFatherFunction({ content: getRandomBartQuote(), date: new Date() });
    //appelle la fonction passée en paramètre par le composant parent
    //et transmet un message
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
