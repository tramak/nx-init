import { Story, Meta } from '@storybook/react';
import { AssetsList, IAssetsListProps } from './assetsList';

export default {
  component: AssetsList,
  title: 'allAssets/AssetsList',
} as Meta;

const Template: Story<IAssetsListProps> = (props) => <AssetsList {...props} />;

export const Primary = Template.bind({});

const data = [1,2,3,4,5,6,7,8].map(i => ({
  id: `${i}`,
  img: 'https://image.shutterstock.com/image-photo/selective-focus-money-banknote-face-260nw-1871837977.jpg',
  type: 'territory',
  title: 'Трактор МегаМех',
  description: 'Каждый Актив представлен в виде  n-ого количества nft-токенов. Это может быть склад, техника и любой другой физический актив,  был тем ...',
  price: i * 541000,
  priceToken: i,
  countToken: 1000,
  countBuyToken: 640
}));

Primary.args = {
  data
};
