import { Story, Meta } from '@storybook/react';
import { Advantages } from './advantages';

export default {
  component: Advantages,
  title: 'home/Advantages',
} as Meta;

const Template: Story<undefined> = () => <Advantages />;

export const Primary = Template.bind({});
