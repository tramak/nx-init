import { Story, Meta } from '@storybook/react';
import { Filters, IFilters } from './filters';

export default {
  component: Filters,
  title: 'allAssets/Filters',
} as Meta;

const Template: Story<IFilters> = (props) => <Filters {...props} />;

export const Primary = Template.bind({});
Primary.args = {};
