import { Story, Meta } from '@storybook/react';
import { AssetsShort, IAssetsShortProps } from './assetsShort';

export default {
  component: AssetsShort,
  title: 'allAssets/AssetsShort',
} as Meta;

const Template: Story<IAssetsShortProps> = (props) => <AssetsShort {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    id: '1',
    img: 'https://image.shutterstock.com/image-photo/selective-focus-money-banknote-face-260nw-1871837977.jpg',
    type: 'territory',
    title: 'Трактор МегаМех',
    description: 'Каждый Актив представлен в виде  n-ого количества nft-токенов. Это может быть склад, техника и любой другой физический актив,  был тем ...',
    price: 5410000,
    priceToken: 4,
    countToken: 1000,
    countBuyToken: 640
  }
};
