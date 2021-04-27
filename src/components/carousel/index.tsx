/** @jsx h */
import { FunctionComponent, h } from 'preact';
import { useRef } from 'preact/hooks';
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

const Cell: FunctionComponent<CarouselCellProps> = ({
  url,
}) => {
  const style = { '--bg': `url(${url})` };
  const options: ScrollIntoViewOptions = {
    behavior: 'smooth'
  };
  const ref = useRef<HTMLElement>(null);
  const handleClick = (): void => ref.current?.nextElementSibling?.scrollIntoView(options);

  return (
    <article
      class="cell"
      {...{style}}
      ref={ref}
      onClick={handleClick}
    />
  )
};

Carousel.Cell = Cell;

export default Carousel;