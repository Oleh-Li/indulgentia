import { IRootState } from "../../interfaces/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataItem } from "../../redux/actions/data";
import { changeLetterFlag } from "../../redux/actions/letterFlag";
import styles from "./list.module.css";
import axios from "axios"

const List = () => {
  const data = useSelector((state: IRootState) => state.data);
  const dispatch = useDispatch();

  const onHandleDelete = async (id: string) => {
    if (data.length <= 1) {
      dispatch(changeLetterFlag(false));
    }
    await axios.delete(
      `https://indulgentia-95f4c-default-rtdb.europe-west1.firebasedatabase.app/dataItems/${id}.json`,
      // {
      //   method: "DELETE",
      //   headers: { "Content-Type": "application/json" },
      // }
    );
    dispatch(deleteDataItem(id));
  };

  return (
    <div className="container">
      <p className={styles.listTitle}>Our Clients</p>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <div className={styles.wraperForImg}>
              <img className={styles.listImage} src={item.fetchedPic} width="250px" alt="list-pic" />
              <p className={styles.itemText}>
                Hello saint {item.text.toUpperCase()}, you bought indulgentia and forgiven for your {item.select.toUpperCase()} now.
              </p>
            </div>
            <button className={styles.deleteButton} onClick={() => onHandleDelete(item.id)}>
              delete {item.select}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
