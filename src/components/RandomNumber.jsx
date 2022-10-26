import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './RandomNumber.module.scss';
import { maxNum, minNum, generatorRandomNum } from '../redux/slices/randomNumSlice.js';

const RandomNumber = () => {
  const randomnum = useSelector((state) => state.randomnum.value);
  const theme = useSelector((state) => state.header.theme);
  const dispatch = useDispatch();

  return (
    <section className={theme ? [styles.number, styles.light].join(' ') : [styles.number]}>
      <div className={styles.number__container}>
        <h1 className={styles.number__title}>
          Генератор <span>случайных</span> чисел
        </h1>
        <p className={styles.number__subtitle}>
          Генератор Случайных чисел онлайн генерирует рандомные числа в заданном диапазоне.
        </p>
        <div className={styles.number__body}>
          <div className={styles.number__number}>{randomnum}</div>
          <div className={styles.number__name}>В диапазоне от:</div>
          <div className={styles.number__range}>
            <input
              onChange={(value) => dispatch(minNum(value.target.value))}
              className={styles.number__input}
              type="number"
            />
            <div className={styles.number__to}>до</div>
            <input
              onChange={(value) => dispatch(maxNum(value.target.value))}
              className={styles.number__input}
              type="number"
            />
          </div>
          <div onClick={() => dispatch(generatorRandomNum())} className={styles.number__button}>
            Сгенерировать
          </div>
        </div>
      </div>
    </section>
  );
};

export default RandomNumber;
