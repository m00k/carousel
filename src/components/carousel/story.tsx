/** @jsx h */
import { h } from 'preact';
import { Story } from '@storybook/preact';
import Carousel, { CarouselProps } from './index'

export default {
  title: 'Example/Carousel',
  component: Carousel,
};

const Template: Story<CarouselProps> = (args) => (
  <Carousel {...args} >
      <article class="cell" style="--bg: url(https://picsum.photos/482/840);" />
      <article class="cell" style="--bg: url(https://picsum.photos/482/843);" />
      <article class="cell" style="--bg: url(https://picsum.photos/482/844);" />
  </Carousel>
);

export const Bland = Template.bind({});
Bland.args = {
  label: 'TODO'
};
