import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Footer.module.scss';
import { burger } from '../redux/slices/headerSlice.js';

const Footer = () => {
  const theme = useSelector((state) => state.header.theme);
  const dispatch = useDispatch();
  const stateBurger = useSelector((state) => state.header.burger);
  const logoBurgerOn = () => {
    if (!stateBurger) {
      dispatch(burger());
    }
  };
  return (
    <footer className={theme ? [styles.footer, styles.light].join(' ') : styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__body}>
          <Link onClick={() => logoBurgerOn()} to="/" className={styles.footer__logo}>
            solmToolkit
          </Link>
          <div className={styles.footer__contact}>
            <a href="https://t.me/solmyr_k">
              <svg width={40} height={40} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z" />
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.footer__copy}>© 2022 solmtoolkit.app</div>
      </div>
    </footer>
  );
};

export default Footer;
