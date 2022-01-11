import React, { useState, useEffect } from "react";

const AboutUsPage = () => {
  const [myUrlPic, setMyUrlPic] = useState<any>("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?q="dog"&page=1&key=15354044-5c6c2e030b5f90cfcf13d54e3&image_type=photo&orientation=horizontal&per_page=5`
    )
      .then((response) => response.json())
      .then((data) => {  
  setMyUrlPic(data.hits[0].pageURL)
      })
      .catch(console.warn);
  });
  console.log(" myUrlPic", myUrlPic);
  return (
    <>
      <h3>AboutUsPage</h3>
      {myUrlPic.length>=1&& <img src={myUrlPic} alt="gg" />}
      
    </>
  );
};

export default AboutUsPage;
