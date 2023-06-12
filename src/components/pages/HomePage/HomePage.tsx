import FormIndulgentia from "../../FormIndulgentia/FormIndulgentia";
import { useSelector } from "react-redux";
import { IRootState } from "../../../interfaces";
import List from "../../List/List";
import Letter from "../../Letter/Letter";

const HomePage = () => {
  const data = useSelector((state: IRootState) => state.data);
  const letterFlag = useSelector((state: IRootState) => state.letterFlag);
  return (
    <>
      <FormIndulgentia />
      {letterFlag && <Letter />}
      {data.length > 0 && <List />}
    </>
  );
};

export default HomePage;
