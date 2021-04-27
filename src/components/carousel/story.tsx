/** @jsx h */
import { h } from 'preact';
import { Story } from '@storybook/preact';
import Carousel, { CarouselProps } from './index'

export default {
  title: 'Example/Carousel',
  component: Carousel,
};

const style = {
  height: '300px',
  width: '300px',
  margin: '0 auto',
}

const pics = [
  'https://picsum.photos/482/840',
  'https://picsum.photos/482/843',
  'https://picsum.photos/482/844',
];

const Template: Story<CarouselProps> = (args) => (
  <div {...{style}}>
    <Carousel {...args} >
      {pics.map(pic => <article class="cell" style={{ ...style, ...{ '--bg': `url(${pic})` } }} />)}
    </Carousel>
  </div>
);

export const Bland = Template.bind({});
Bland.args = {
  label: 'TODO'
};
