import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'World', 'I ve you'], ' ');
  console.log(element);
  return element;
}



ReactDOM.render(
  <h1>Hello, world! Test</h1>,
  document.getElementById('root')
);
