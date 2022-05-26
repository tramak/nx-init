import { Story, Meta } from '@storybook/react';
import { AllAssetsTitle, IAllAssetsTitle } from './allAssetsTitle';

export default {
  component: AllAssetsTitle,
  title: 'allAssets/Title',
} as Meta;

const Template: Story<IAllAssetsTitle> = (props) => <AllAssetsTitle {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  data: 10
};
