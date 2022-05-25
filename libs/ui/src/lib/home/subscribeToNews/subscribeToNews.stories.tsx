import { Story, Meta } from '@storybook/react';
import { SubscribeToNews } from './subscribeToNews';

export default {
  component: SubscribeToNews,
  title: 'home/SubscribeToNews',
} as Meta;

const Template: Story<undefined> = () => <SubscribeToNews />;

export const Primary = Template.bind({});
