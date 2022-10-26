import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  onChangeFromValues,
  onFromPrice,
  onRates,
  onToPrice,
  onChangeToValues,
} from '../redux/slices/converterSlice.js';

import styles from './Сonverter.module.scss';

const currencies = ['RUB', 'USD', 'EUR'];

const Сonverter = () => {
  const dispatch = useDispatch();
  const toValue = useSelector((state) => state.converter.toValue);
  const fromValue = useSelector((state) => state.converter.fromValue);
  const fromPrice = useSelector((state) => state.converter.fromPrice);
  const toPrice = useSelector((state) => state.converter.toPrice);
  const theme = useSelector((state) => state.header.theme);

  useEffect(() => {
    dispatch(onChangeFromValues(fromValue));
  }, [fromPrice]);

  useEffect(() => {
    dispatch(onChangeToValues(toValue));
  }, [, toPrice]);

  useEffect(() => {
    fetch('https://cdn.cur.su/api/latest.json')
      .then((res) => res.json())
      .then((json) => {
        dispatch(onRates(json.rates));
      })
      .catch((err) => {
        alert('Не удалось получить данные');
      });
  }, []);
  return (
    <section className={theme ? [styles.converter, styles.light].join(' ') : [styles.converter]}>
      <div className={styles.converter__container}>
        <div className={styles.converter__title}>Конвертер валют</div>
        <div className={styles.converter__subtitle}>
          Конвертер валют онлайн — инструмент, который позволит вам рассчитать соотношения
          актуальных курсов денежных средств.
        </div>
        <div className={styles.converter__body}>
          <div className={styles.converter__item}>
            <div className={styles.converter__row}>
              {currencies.map((e) => {
                return (
                  <div
                    key={e}
                    onClick={() => dispatch(onFromPrice(e))}
                    className={
                      e === fromPrice
                        ? styles.converter__currency_active
                        : styles.converter__currency
                    }>
                    {e}
                  </div>
                );
              })}
            </div>
            <input
              onChange={(e) => dispatch(onChangeFromValues(e.target.value))}
              value={fromValue}
              type="number"
              className={styles.converter__input}
              min="0"
            />
          </div>
          <div className={styles.converter__item}>
            <div className={styles.converter__row}>
              {currencies.map((e) => {
                return (
                  <div
                    key={e}
                    onClick={() => dispatch(onToPrice(e))}
                    className={
                      e === toPrice ? styles.converter__currency_active : styles.converter__currency
                    }>
                    {e}
                  </div>
                );
              })}
            </div>
            <input
              onChange={(e) => dispatch(onChangeToValues(e.target.value))}
              value={toValue}
              type="number"
              className={styles.converter__input}
              min="0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Сonverter;
