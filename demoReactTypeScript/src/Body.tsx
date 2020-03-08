import * as React from 'react';
import Counter from './Counter';

interface BodyProps {
  data?: string;
}

const Body: React.FC<BodyProps> = (props: BodyProps) => (
  <Counter/>
);

Body.defaultProps = {
  data: 'more',
};

export default Body;