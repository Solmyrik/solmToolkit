import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Password.module.scss';
import { progresLength } from '../redux/slices/passwordSlice.js';

const Password = () => {
  let lever = true;
  const dispatch = useDispatch();
  const length = useSelector((state) => state.password.value);
  const password = useSelector((state) => state.password.password);
  const theme = useSelector((state) => state.header.theme);

  useEffect(() => {
    if (lever) {
      dispatch(progresLength(10));
      lever = false;
    }
  }, []);

  const copyLink = () => {
    navigator.clipboard.writeText(password);
  };

  return (
    <section className={theme ? [styles.password, styles.light].join(' ') : [styles.password]}>
      <div className={styles.password__container}>
        <h1 className={styles.password__title}>Генератор паролей</h1>
        <p className={styles.password__subtitle}>
          Генерируйте надежные случайные пароли, чтобы оставаться в безопасности онлайн.
        </p>
        <div className={styles.password__body}>
          <div className={styles.password__passphrase}>
            <div className={styles.password__string}>{password}</div>
            <div onClick={copyLink} className={styles.password__copy}>
              <svg width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M21,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.32.32,0,0,0-.09,0A.88.88,0,0,0,14.05,2H10A3,3,0,0,0,7,5V6H6A3,3,0,0,0,3,9V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V18h1a3,3,0,0,0,3-3V9S21,9,21,8.94ZM15,5.41,17.59,8H16a1,1,0,0,1-1-1ZM15,19a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H7v7a3,3,0,0,0,3,3h5Zm4-4a1,1,0,0,1-1,1H10a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h3V7a3,3,0,0,0,3,3h3Z"
                  fill="#6563ff"
                />
              </svg>
            </div>
          </div>
          <div className={styles.password__value}>
            <div className={styles.password__value_text}>Количество символов:</div>
            <div className={styles.password__value_num}>{length}</div>
          </div>
          <div className={styles.password__slider_cont}>
            <div className={styles.password__slider}>
              <input
                onChange={(value) => dispatch(progresLength(value.target.value))}
                type="range"
                min="1"
                max="50"
                value={length}
              />
              <progress min="1" max="50" value={length}></progress>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Password;
