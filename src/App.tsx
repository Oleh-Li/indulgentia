import "./App.css";
import FormIndulgentia from "./components/FormIndulgentia/FormIndulgentia";
import List from "./components/List/List";
import { useSelector } from "react-redux";
import { IRootState } from "./interfaces";

function App() {
  const data = useSelector((state: IRootState) => state.data);

  return (
    <div className="App">
      <h3>Indulgentia init</h3>
      <FormIndulgentia />
      {data.length > 0 && <List />}
    </div>
  );
}

export default App;
