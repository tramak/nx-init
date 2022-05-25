import { Story, Meta } from '@storybook/react';
import { SloganAndVideo } from './sloganAndVideo';

export default {
  component: SloganAndVideo,
  title: 'home/SloganAndVideo',
} as Meta;

const Template: Story<undefined> = () => <SloganAndVideo />;

export const Primary = Template.bind({});
