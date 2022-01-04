import { IRootState } from "../../interfaces/index";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataItem } from "../../redux/actions/data";

const List = () => {
  const data = useSelector((state: IRootState) => state.data);
  const dispatch = useDispatch();

  const onHandleDelete = (id: number) => {
    dispatch(deleteDataItem(id));
  };

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => onHandleDelete(item.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
