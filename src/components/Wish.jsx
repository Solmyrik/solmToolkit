import { useSelector, useDispatch } from 'react-redux';

import { onChangeString } from '../redux/slices/wishSlice.js';
import styles from './Wish.module.scss';

const Wish = () => {
  const dispatch = useDispatch();
  const compliment = useSelector((state) => state.wish.value);
  const theme = useSelector((state) => state.header.theme);

  return (
    <section className={theme ? [styles.wish, styles.light].join(' ') : [styles.wish]}>
      <div className={styles.wish__container}>
        <h2 className={styles.wish__title}>Генератор красивых комплиментов</h2>
        <div className={styles.wish__subtitle}>
          Генератор позволит подобрать комплимент дорогому человеку
        </div>
        <div className={styles.wish__body}>
          <div className={styles.wish__string}>{compliment}</div>
          <div className={styles.wish__btns}>
            <button onClick={() => dispatch(onChangeString('man'))} className={styles.wish__btn}>
              Сгенерировать комплимент мужчине
            </button>
            <button
              onClick={() => dispatch(onChangeString('woman'))}
              className={[styles.wish__btn, styles.wish__btn_p].join(' ')}>
              Сгенерировать комплимент девушке
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wish;
