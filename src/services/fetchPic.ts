function fetchPic(value: string, url: any) {
  const REACT_APP_KEY = "15354044-5c6c2e030b5f90cfcf13d54e3";
  fetch(
    `https://pixabay.com/api/?q=${value}&page=1&key=${REACT_APP_KEY}&image_type=photo&orientation=horizontal&per_page=10`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("fetchPic.ts file", data.hits);
      const randomNumber = Math.ceil(Math.random() * data.hits.length - 1);
      console.log(randomNumber);
      url(data.hits[randomNumber].webformatURL);
      return data.hits;
    })
    .catch(console.warn);
}

export default fetchPic;
