import React from 'react';
import styles from './NotFoundBlock.module.scss';
const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <img src="https://img.icons8.com/?size=100&id=84121&format=png&color=000000" alt="Not found" />
      <h1>Ничего не найдено</h1>
      <p>Данной странице не существует на нашем сайте</p>
    </div>
  );
};

export default NotFoundBlock;
