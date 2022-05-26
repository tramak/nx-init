import React, { useState } from 'react';
import cl from 'classnames';
import styles from './assetsShort.module.scss';
import { AssetsIcon } from '../assetsIcon/assetsIcon';
import pieChart from './img/pieChart.svg';
import repeatImg from './img/repeat.svg';

export interface IAssets {
  id: string;
  img: string;
  type?: string;
  title: string;
  description: string;
  price: number;
  priceToken: number;
  countToken: number;
  countBuyToken: number;
}

export interface IAssetsShortProps {
  data: IAssets
}

export const AssetsShort: React.FC<IAssetsShortProps> = (
  {
    data
  }
) => {
  const [visiblePriceFull, setVisiblePriceFull] = useState(true);

  const repeat = <img src={repeatImg} className={styles.repeatImg} onClick={() => setVisiblePriceFull(v => !v)} />;

  return (
    <div className={styles.block}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <AssetsIcon type={data.type} />
      </div>

      <div className={styles.info}>
        <div className={styles.title}>
          {data.title}
        </div>

        <div className={styles.description}>
          {data.description}
        </div>

        <div className={styles.infoPrice}>
          <div
            className={cl(styles.price, {
              [styles.active]: !visiblePriceFull
            })}
          >
            <div className={styles.priceFull}>
              ${data.price}
              {repeat}
            </div>
            <div className={styles.priceToken}>
              <span>${data.priceToken} ETH</span>
              <span className={styles.priceTokenDesc}>
                – <b>1</b> токен
              </span>
              {repeat}
            </div>
          </div>
          <div className={styles.countBuy}>
            <img src={pieChart} className={styles.pieChart} />
            {data.countToken}/{data.countBuyToken}
          </div>
        </div>
      </div>
    </div>
  );
};
