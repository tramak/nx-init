import { Story, Meta } from '@storybook/react';
import { Logo } from './logo';

export default {
  component: Logo,
  title: 'common/Logo',
} as Meta;

const Template: Story<undefined> = () => <Logo />;

export const Primary = Template.bind({});
