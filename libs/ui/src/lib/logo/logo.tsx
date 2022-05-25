import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logo.module.scss';
import appLogo from './img/appLogo.svg';
import { SvgLogo } from '../svg/svgLogo';

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img className={styles.icon} src={appLogo} alt="logo" />
      <div className={styles.side}>
        <SvgLogo color="#FFF" />
        <div className={styles.title}>инвестируй в реальное</div>
      </div>
    </Link>
  );
};
