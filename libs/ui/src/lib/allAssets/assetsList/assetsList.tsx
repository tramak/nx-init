import React from 'react';
import cl from 'classnames';
import styles from './assetsList.module.scss';
import { IAssets, AssetsShort } from '../assetsShort/assetsShort';

export interface IAssetsListProps {
  data?: IAssets[]
}
export const AssetsList: React.FC<IAssetsListProps> = (
  {
    data
  }
) => {
  return (
    <div className={cl(styles.container, styles.list)}>
      {data?.map(item => <AssetsShort data={item} />)}
    </div>
  );
};
