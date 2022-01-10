import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import "./letter.css"

const Letter = () => {
  const item = useSelector((state: IRootState) => state.data);

  return (
    <h3 className="letter__header">
      Hello {item[0].text} you are fogiven for your {item[0].select}
    </h3>
  );
};

export default Letter;
