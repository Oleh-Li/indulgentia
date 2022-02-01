import { IRootState } from "../../interfaces/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataItem } from "../../redux/actions/data";
import { changeLetterFlag } from "../../redux/actions/letterFlag";
import "./list.css";

const List = () => {
  const data = useSelector((state: IRootState) => state.data);
  const dispatch = useDispatch();

  const onHandleDelete = (id: number) => {
    if (data.length <= 1) {
      dispatch(changeLetterFlag(false));
    }
    dispatch(deleteDataItem(id));
  };

  return (
    <div className="container">
      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list_item">
            <img src={item.fetchedPic} width="200px" alt="list-pic"/>
            <p>{item.text}</p>
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
