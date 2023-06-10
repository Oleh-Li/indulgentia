import { IItem } from './../interfaces/index';



const fetchDataItemsFromFirebase = async () => {
  const response = await fetch(
    "https://indulgentia-95f4c-default-rtdb.europe-west1.firebasedatabase.app/dataItems.json",
    {
      method: "GET",
      headers: { "Content-Type": "application/json"},
      
    }
  );
  const data = await response.json();
  console.log("Fetch Data", data);
  const dataItems:IItem[] = Object.keys(data).map(key=>({...data[key], id: key}))
  console.log("dataItems", dataItems)
  return dataItems
};

export default fetchDataItemsFromFirebase