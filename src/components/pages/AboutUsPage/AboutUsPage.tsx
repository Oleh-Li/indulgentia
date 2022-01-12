import { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import { IRootState } from "../../../interfaces";

const AboutUsPage = () => {
  const [myUrlPic, setMyUrlPic] = useState<any>("");
  const selectValue = useSelector((state: IRootState) => state.select);
console.log(selectValue)
  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?q=${selectValue}&page=1&key=15354044-5c6c2e030b5f90cfcf13d54e3&image_type=photo&orientation=horizontal&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => {
        setMyUrlPic(data.hits[0].largeImageURL);
      })
      .catch(console.warn);
  });
  console.log(" myUrlPic", myUrlPic);
  return (
    <>
      <h3>AboutUsPage</h3>
      <img src={myUrlPic} alt="gg" />
    </>
  );
};

export default AboutUsPage;
