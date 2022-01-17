import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import "./letter.css"

const Letter = () => {
  const item = useSelector((state: IRootState) => state.data);

  return (
    <div className="container">
    <h4 className="letter__header">
      <img src={item[0].fetchedPic}/>
      Hello {item[0].text} you are fogiven for your {item[0].select}
    </h4>
    </div>
  );
};

export default Letter;
