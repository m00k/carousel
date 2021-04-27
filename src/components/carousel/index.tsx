/** @jsx h */
import { FunctionComponent, h } from 'preact';
import './styles.css';

export interface CarouselProps {
}

const Carousel: FunctionComponent<CarouselProps> = ({
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


export default Carousel;