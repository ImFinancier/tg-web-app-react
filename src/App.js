import {useEffect} from "react";
import './App.css';
import { useTelegram } from "./components/hooks/useTelegram";


function App() {
  const {onToggleButton, tg} = useTelegram();

  useEffect(() => {
    tg.ready();
  }, [])

  return (
    <div className="App">
      <button onClick={onToggleButton}>toggle</button>
        <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
