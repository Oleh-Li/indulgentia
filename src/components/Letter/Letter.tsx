import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";
import "./letter.css"

const Letter = () => {
  const item = useSelector((state: IRootState) => state.data);

  return (
    <div className="container">
      <div className="latter_wrpper">
      <img className="letter_img" src={item[0].fetchedPic} alt="leetr-pic"/>
    <h4 className="letter__header">
      Hello {item[0].text} you are fogiven for your {item[0].select}
    </h4>
    </div>
    </div>
  );
};

export default Letter;
