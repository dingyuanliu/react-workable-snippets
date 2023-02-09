import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Animated } from "./components/Animated";
import { TAnimateEffect } from "./components/types";

function App() {
  const [effect, setEffect] = useState<TAnimateEffect>("pop");
  const [isTrigger, setIsTrigger] = useState(false);
  const [typing, setTyping] = useState("");

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Backspace") {
        setTyping("");
        setIsTrigger(false);
        return;
      }

      /**
       * Only letters start with Key
       */
      if (!event.code.startsWith("Key")) {
        return;
      }

      setTyping(event.key);
      setIsTrigger(true);
      setTimeout(() => setIsTrigger(false), 100);
    };

    document.addEventListener("keydown", handleKeydown);

    return () => document.removeEventListener("keydown", handleKeydown);
  }, []);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setEffect(event.target.value as TAnimateEffect);
  };

  return (
    <div className="App">
      <h4>Please choose an effect first, then try to type letters.</h4>
      <h5 className="notes">Note: only letters take effect.</h5>
      <div>
        <label htmlFor="effect-select">Effect: </label>
        <select id="effect-select" onChange={handleSelectChange}>
          <option value="pop">Pop</option>
          <option value="bounce">Bounce</option>
          <option value="shake">Shake</option>
        </select>
      </div>
      <Animated effects={[effect]} isTrigger={isTrigger}>
        <div className="typingWrapper">{typing}</div>
      </Animated>
    </div>
  );
}

export default App;
