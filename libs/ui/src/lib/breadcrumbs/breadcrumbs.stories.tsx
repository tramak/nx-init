import { Story, Meta } from '@storybook/react';
import { Breadcrumbs, IBreadcrumbsProps } from './breadcrumbs';

export default {
  component: Breadcrumbs,
  title: 'common/Breadcrumbs',
} as Meta;

const Template: Story<IBreadcrumbsProps> = (props) => <Breadcrumbs {...props} />;

export const Primary = Template.bind({});
Primary.args = {
  data: [{
    title: 'Главная',
    link: '/'
  }, {
    title: 'Активы',
    link: '/'
  }, {
    title: 'Все активы'
  }]
};
