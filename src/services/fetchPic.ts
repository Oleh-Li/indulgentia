// const fetchPic = async (value: string) => {
//   const REACT_APP_KEY = "15354044-5c6c2e030b5f90cfcf13d54e3";
//   const response = await fetch(
//     `https://pixabay.com/api/?q=${value}&page=1&key=${REACT_APP_KEY}&image_type=photo&orientation=horizontal&per_page=1`
//   );
//   const data = response.json();
//   return data;
// };

function fetchPic(value:string) {
  const REACT_APP_KEY = "15354044-5c6c2e030b5f90cfcf13d54e3";
  fetch(
    `https://pixabay.com/api/?q=${value}&page=1&key=${REACT_APP_KEY}&image_type=photo&orientation=horizontal&per_page=5`
  )
    .then((response) => response.json())
    .then((data) => {
console.log("DATA", data.hits)
    return data.hits;
    })
    .catch(console.warn);
}

export default fetchPic;
