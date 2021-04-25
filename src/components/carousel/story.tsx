/** @jsx h */
import { h } from 'preact';
import { Story } from '@storybook/preact';
import { Carousel, CarouselProps } from './index'

export default {
  title: 'Example/Carousel',
  component: Carousel,
};

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Bland = Template.bind({});
Bland.args = {
  label: 'TODO'
};
