import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const enteredName = useRef();
  const [playerName, setPlayerName] = useState(null);

  function clickHandler() {
    setPlayerName(enteredName.current.value);
    console.log(enteredName);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={enteredName} />
        <button onClick={clickHandler}>Set Name</button>
      </p>
    </section>
  );
}
