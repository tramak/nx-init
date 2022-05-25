import React from 'react';
import { useNavigate } from 'react-router-dom';
import cl from 'classnames';
import play from './img/play.svg';
import styles from './sloganAndVideo.module.scss';

export const SloganAndVideo: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={cl(styles.container, styles.slogan_and_video)}>
      <div className={styles.slogan}>
        <div className={styles.title}>
          Помогаем <span className={styles.title_bold}>каждому</span> стать инвестором
          NFT-токенов, обеспеченных<span className={styles.title_bold}> реальными</span> активами
        </div>
        <div className={styles.slogan__desc}>
          Каждый Актив представлен в виде NFT-токенов. Это может быть склад, техника и любой
          другой физический актив, который можно потрогать..
        </div>
        <button
          type="button"
          onClick={() => {
            navigate('/login');
          }}
          className={styles.slogan__button}
        >
          Вступить
        </button>
      </div>
      <div className={styles.video}>
        <div className={styles.video__desc}>Видео о том, как это работает</div>
        <button
          type="button"
          className={styles.video__button}
        >
          <img className={styles.video__button__play} src={play} alt="" />
        </button>
      </div>
    </div>
  );
};
