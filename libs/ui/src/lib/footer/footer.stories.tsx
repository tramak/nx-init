import { Story, Meta } from '@storybook/react';
import { Footer } from './footer';

export default {
  component: Footer,
  title: 'common/Footer',
} as Meta;

const Template: Story<undefined> = () => <Footer />;

export const Primary = Template.bind({});
