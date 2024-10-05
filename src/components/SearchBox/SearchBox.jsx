import s from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={s.container}>
      <label className={s.label}>
        <span className={s.span}>Find contacts by name</span>
        <input type="text" className={s.input} />
      </label>
    </div>
  );
};

export default SearchBox;
