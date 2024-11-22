import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  return (
    <div className={s.box}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        onChange={handleSearch}
        placeholder="Start find here..."
        className={s.input}
        id="search"
      />
    </div>
  );
};

export default SearchBox;
