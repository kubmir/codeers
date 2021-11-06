import * as React from 'react';

import './layout.css';

import '@fontsource/red-hat-display';
import '@fontsource/red-hat-text';

export const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  );
};
