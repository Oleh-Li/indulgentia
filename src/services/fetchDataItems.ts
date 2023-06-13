import axios from 'axios';
import { IItem } from './../interfaces/index';

const fetchDataItemsFromFirebase = async () => {
  try {
    const response = await axios("https://indulgentia-95f4c-default-rtdb.europe-west1.firebasedatabase.app//dataItems.json");
    const data = response.data;
    const dataItems: IItem[] = Object.keys(data).map(key => ({ ...data[key], id: key }))
    return dataItems
  } catch (error) {
    console.log("HERE ERROR fetchDataItemsFromFirebase", error)
  }
};

export default fetchDataItemsFromFirebase