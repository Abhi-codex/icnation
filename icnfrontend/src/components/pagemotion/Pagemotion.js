import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Pagemotion.css';

const PageTransition = ({ children, in: inProp }) => {
  return (
    <CSSTransition
      in={inProp}
      timeout={300}
      classNames="page"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
};

export default PageTransition;
