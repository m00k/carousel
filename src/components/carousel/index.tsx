/* eslint-disable @typescript-eslint/explicit-function-return-type */
/** @jsx h */
import { FunctionComponent, h, } from 'preact';
import './styles.css';

export interface CarouselProps {
}

type CarouselFC =
  & FunctionComponent<CarouselProps> 
  & { Cell: FunctionComponent<CarouselCellProps> };

const Carousel: CarouselFC = ({
  children,
  ...props
}) => {
  return (
    <div
      className={'carousel'}
      {...props}
    >
      { children }
    </div>
  );
};

export interface CarouselCellProps {
  url: string;
}

// eslint-disable-next-line react/display-name
Carousel.Cell = ({
  url,
}) => {
  const style = { '--bg': `url(${url})` };
  return (
    <article
      class="cell"
      {...{style}}
    />
  )
};

export default Carousel;