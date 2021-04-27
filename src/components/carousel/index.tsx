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
  const handleClick = (e: any): void => { // TODO: fix types
    const target: HTMLElement = e.target;
    const parent: HTMLElement | null = target?.parentElement;
    if (!parent) return;
    const median = parent.offsetLeft + (parent.clientWidth / 2)
    const goNext = e.clientX > median;
    const scrollTarget: any = goNext // TODO: fix types
      ? target.nextElementSibling || target.parentElement?.firstElementChild
      : target.previousElementSibling || target.parentElement?.lastElementChild;
    scrollTarget?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <article
      class="cell"
      {...{style}}
      onClick={handleClick}
    />
  )
};

Carousel.Cell = Cell;

export default Carousel;