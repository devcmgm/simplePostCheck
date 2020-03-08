import * as React from 'react';

interface HeaderProps {
  name?: string;
}

 const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
  <h1>Hello, {props.name}! Header.</h1>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;