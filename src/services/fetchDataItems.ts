import { IItem } from './../interfaces/index';
import {useDispatch} from "react-redux"


const fetchDataItems = async () => {
  const response = await fetch(
    
    "https://indulgentia-95f4c-default-rtdb.europe-west1.firebasedatabase.app/dataItems.json",
    {
      method: "GET",
      headers: { "Content-Type": "application/json"},
      
    }
  );
  const data = await response.json();
  console.log("Fetch Data", data);
  const dataItems = Object.keys(data).map(key=>({...data[key], id: key}))
  console.log("dataItems", dataItems)
  // const dispatch = useDispatch()
  // dispatch(fetchDataItems(dataItems))
};

export default fetchDataItems