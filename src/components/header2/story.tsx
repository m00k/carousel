/** @jsx h */
import { h } from 'preact';
import { Story } from '@storybook/preact';
import Header2 from './index';

export default {
  title: 'Example/Header2',
  component: Header2,
  argTypes: {
  },
};

const Template: Story<{}> = () => <Header2 />;

export const Main = Template.bind({});
Main.args = {
};
