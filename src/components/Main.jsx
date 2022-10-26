import React from 'react';
import styles from './Main.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Main = () => {
  const theme = useSelector((state) => state.header.theme);
  return (
    <section className={theme ? [styles.main, styles.light].join(' ') : [styles.main]}>
      <div className={styles.main__container}>
        <div className={styles.main__left}>
          <div className={styles.main__title}>
            <h1>инструменты</h1>
            <p className={styles.main__title_purple}>Которые помогут</p>
            <p>сделать выбор</p>
          </div>
          <div className={styles.main__text}>
            Выбери нужный инструмент с <span>solmToolkit</span>
          </div>
          <Link to="/сhoice" className={styles.main__button}>
            Выбрать
          </Link>
        </div>
        <div className={styles.main__right}>
          <div className={styles.main__img}>
            <img src="assets/mainnfc.png" alt="" />
          </div>
          <div className={styles.main__decor}></div>
          <div className={styles.main__decor}></div>
          <div className={styles.main__decor}></div>
          <div className={styles.main__decor}></div>
        </div>
      </div>
    </section>
  );
};

export default Main;
