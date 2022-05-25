import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../logo/logo';
import telegram from './img/telegram.svg';
import youtube from './img/youtube.svg';
import styles from './footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.leftBlock}>
          <Logo />

          <div className={styles.aboutTitle}>
            ОАО “Уралхим”
          </div>
        </div>

        <div className={styles.mainBlock}>
          <nav className={styles.nav}>
            <div className={styles.navBlock}>
              <div className={styles.navTitle}>Навигация</div>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Главная
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    О нас
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Новости
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Токены
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.navBlock}>
              <div className={styles.navTitle}>Юридическое</div>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Обработка данных
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Права и обязанности
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Конфиденциальность
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.navBlock}>
              <div className={styles.navTitle}>Помощь</div>
              <ul className={styles.navList}>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Тех. поддержка
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Консультация
                  </Link>
                </li>
                <li className={styles.navItem}>
                  <Link className={styles.link} to="/">
                    Популярные вопросы
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.navBlock}>
              <div className={styles.navTitle}>Наши соцсети</div>

              <ul className={styles.social}>
                <li className={styles.socialItem}>
                  <img src={telegram} />
                </li>
                <li className={styles.socialItem}>
                  <img src={youtube} />
                </li>
              </ul>
            </div>
          </nav>

          <div className={styles.aboutTitleBottom}>
            ОАО “Уралхим”
          </div>

          <div className={styles.copyright}>Copyright ©. Все права защищены 2022</div>
        </div>
      </div>
    </div>
  );
};
