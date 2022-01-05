import { useSelector } from "react-redux";
import { IRootState } from "../../interfaces";

const Letter = () => {
    const item = useSelector((state:IRootState)=>state.data)
    
  return (
    <>
      <h3>Hello {item[0].text} you are fogiven for your {item[0].select}</h3>
    </>
  );
};

export default Letter;
