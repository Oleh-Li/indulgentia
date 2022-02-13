import { IRootState } from "../../interfaces/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataItem } from "../../redux/actions/data";
import { changeLetterFlag } from "../../redux/actions/letterFlag";
import styles from "./list.module.css";

const List = () => {
  const data = useSelector((state: IRootState) => state.data);
  const dispatch = useDispatch();

  const onHandleDelete = async (id: string) => {
    if (data.length <= 1) {
      dispatch(changeLetterFlag(false));
    }
    await fetch(
      `https://indulgentia-95f4c-default-rtdb.europe-west1.firebasedatabase.app/dataItems/${id}.json`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      }
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
              <img src={item.fetchedPic} width="250px" alt="list-pic" />
              <p className={styles.itemText}>
                The {item.text} Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Hic, recusandae minus. Ratione optio ut iure
                explicabo maiores, ex vitae ab.
              </p>
            </div>
            <button onClick={() => onHandleDelete(item.id)}>
              delete {item.select}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
