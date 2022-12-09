import { useState } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import classes from "./SearchField.module.scss";
import SearchIcon from '../../public/icons/SearchIcon.svg';
import useTranslation from "next-translate/useTranslation";

const SearchField = () => {

  const { t } = useTranslation("common");
  const [search, setSearch] = useState("");
  const debounced = useDebounce(search)

  return (
    <div className={classes.SearchField} >
      <SearchIcon className={classes.SearchIcon} />
      <input type="text" placeholder={t("search_placeholder")} value={search} onChange={e => setSearch(e.target.value)} />
      {debounced && <ul>
        <li>asdfasdfasdfasdf asdf as</li>
      </ul>}
    </div >
  )
};

export default SearchField;
