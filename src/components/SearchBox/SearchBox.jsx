import css from "./SearchBox.module.css";
import { useDispatch, useSelector} from "react-redux";
import {selectNameFilter, changeFilter} from '../../redux/filtersSlice'

export default function SearchBox() {
  const dispatch = useDispatch();
  const nameFilter = useSelector(selectNameFilter);
  const handleChange = (evt) => {
    dispatch(changeFilter(evt.target.value))
  }

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.searchInput}
        type="text"
        value={nameFilter}
        onChange={handleChange}
      />
    </div>
  );
}
