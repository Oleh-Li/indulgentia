import "./App.css";
import FormIndulgentia from "./components/FormIndulgentia/FormIndulgentia";
import List from "./components/List/List";
import { useSelector } from "react-redux";
import { IRootState } from "./interfaces";
import Letter from "./components/Letter/Letter";

function App() {
  const data = useSelector((state: IRootState) => state.data);
  const letterFlag = useSelector((state:IRootState)=>state.letterFlag)

  return (
    <div className="App">
      <h3>Indulgentia init</h3>
      <FormIndulgentia />
      {data.length > 0 && <List />}
      {letterFlag && <Letter/>}
    </div>
  );
}

export default App;
