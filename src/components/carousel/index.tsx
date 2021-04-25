/** @jsx h */
import { FunctionComponent, h } from 'preact';
import './styles.css';

export interface CarouselProps {
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export const Carousel: FunctionComponent<CarouselProps> = ({
  label,
  ...props
}) => {
  return (
    <div
      className={'carousel'}
      {...props}
    >
      {label}
    </div>
  );
};
