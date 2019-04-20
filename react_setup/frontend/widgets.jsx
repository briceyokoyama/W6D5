import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import RenderHelper from './render-helper';

document.addEventListener('DOMContentLoaded', function () {
  // ReactDOM.render(<Clock />, Root());
  ReactDOM.render(<RenderHelper />, Root());
});