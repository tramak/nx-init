import { Story, Meta } from '@storybook/react';
import { Header, IHeaderProps } from './header';

export default {
  component: Header,
  title: 'Header',
} as Meta;

const Template: Story<IHeaderProps> = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  status: 'idle'
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  status: ''
};

