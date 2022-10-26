import { useSelector, useDispatch } from 'react-redux';
import QRCode from 'react-qr-code';

import { getVelueInput } from '../redux/slices/qrSlice.js';
import styles from './Qr.module.scss';

const Qr = () => {
  const dispatch = useDispatch();
  const qr = useSelector((state) => state.qrCode.value);
  const theme = useSelector((state) => state.header.theme);
  return (
    <section className={theme ? [styles.qr, styles.light].join(' ') : [styles.qr]}>
      <div className={styles.qr__container}>
        <div className={styles.qr__title}>
          Генератор <span>QR</span>-кодов
        </div>
        <div className={styles.qr__subtitle}>
          При помощи QR-кода можно закодировать любую информацию, например: текст, номер телефона,
          ссылку на сайт или визитную карточку.
        </div>
        <div className={styles.qr__body}>
          <div className={styles.qr__name}>Введите содержимое QR-кода</div>
          <input
            onChange={(e) => dispatch(getVelueInput(e.target.value))}
            className={styles.qr__input}
            type="text"
          />
          <div className={styles.qr__wrapper}>
            <QRCode className={styles.qr__code} value={qr} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qr;
