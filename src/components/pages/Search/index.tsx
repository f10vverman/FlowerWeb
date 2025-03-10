import React from 'react';
import styles from './Search.module.scss';
interface HeaderProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}
const Search = ({ searchValue, setSearchValue }: HeaderProps) => {
  return (
    <div className={styles.root}>
      <svg className={styles.icon} enable-background="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z" id="XMLID_223_" />
      </svg>
      <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)} className={styles.input} placeholder="Поиск ..." />
      {searchValue && (
        <svg onClick={() => setSearchValue('')} className={styles.clearIcon} data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.17,10l3.89-3.89a.37.37,0,1,0-.53-.53L9.64,9.43,5.75,5.54a.37.37,0,1,0-.53.53L9.11,10,5.22,13.85a.37.37,0,0,0,0,.53.34.34,0,0,0,.26.11.36.36,0,0,0,.27-.11l3.89-3.89,3.89,3.89a.34.34,0,0,0,.26.11.35.35,0,0,0,.27-.11.37.37,0,0,0,0-.53Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
