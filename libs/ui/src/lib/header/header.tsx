import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import appLogo from './icons/appLogo.svg';
import titleImage from './icons/titleImage.svg';
import styles from './header.module.scss';

export interface IHeaderProps {
  status: string;
  logout: () => void;
  scrollToQuestionList: () => void;
}

export const Header: React.FC<IHeaderProps> = (
  {
    status,
    logout,
    scrollToQuestionList
  }
) => {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img className={styles.logo__icon} src={appLogo} alt="logo" />
        <div className={styles.right__side}>
          <img className={styles.logo__right_side_icon} src={titleImage} alt="daofarm" />
          <div className={styles.logo__title}>инвестируй в реальное</div>
        </div>
      </Link>
      <div className={styles.links}>
        <Link className={styles.link} to="/token-list">
          Все активы!!
        </Link>
        <Link className={styles.link} to="/">
          Как это работает
        </Link>
        <button
          type="button"
          className={styles.link}
          onClick={scrollToQuestionList}
        >
          Частые вопросы{' '}
        </button>
      </div>
      <div className={styles.auth}>
        {status !== 'idle' ? (
          <button
            className={styles.auth__button}
            type="button"
            onClick={() => {
              navigate('/login');
            }}
          >
            Log in
          </button>
        ) : (
          <button
            className={styles.auth__button}
            type="button"
            onClick={logout}
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};
