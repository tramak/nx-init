import React from 'react';
import cl from 'classnames';
import stepGraph from './img/stepGraph.svg';
import stepGraphMobile from './img/stepGraphMobile.svg';
import styles from './advantages.module.scss';

export const Advantages = () => {
  return (
    <div className={cl(styles.container, styles.advantages)}>
      <div className={styles.title}>
        <span className={styles.title_bold}>Преимущества</span> быть владельцем NFT-токенов
      </div>
      <div className={styles.advantages__step_graph}>
        <img className={styles.advantages__img_step_graph} src={stepGraph} alt="stepGraph" />
        <img
          className={styles.advantages__img_step_graph_mobile}
          src={stepGraphMobile}
          alt="stepGraphMobile"
        />
        <div className={styles.advantages__steps_text}>
          <div className={styles.advantages__text_left}>
            <div className={styles.advantages__text_heading}>Мы покупаем</div>
            <div className={styles.advantages__text_main}>
              «Компания» договаривается о покупке <br /> и закрывает сделку.
            </div>
          </div>

          <div className={styles.advantages__text_right}>
            <div className={styles.advantages__text_heading}>Вы инвестируете</div>
            <div className={styles.advantages__text_main}>
              Покупая NFT-токен, вы становитесь нашим партнером, владельцем реального актива, а
              NFT-токен работает на вас каждый день!
            </div>
          </div>

          <div className={styles.advantages__text_left}>
            <div className={styles.advantages__text_heading}>Мы используем</div>
            <div className={styles.advantages__text_main}>
              «Компания» эффективно использует каждый актив с помощью профессиональных партнеров
              по ведению бизнеса грузоперевозок и страхованию.
            </div>
          </div>

          <div className={styles.advantages__text_right}>
            <div className={styles.advantages__text_heading}>Вы получаете прибыль</div>
            <div className={styles.advantages__text_main}>
              Мы выплачиваем полученную прибыль от использования техники - вам.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
