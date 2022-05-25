import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../logo/logo';
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
      <Logo />
      <div className={styles.links}>
        <Link className={styles.link} to="/token-list">
          Все активы
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
