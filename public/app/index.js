import _ from 'lodash';


function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'World'], ' ');
  console.log(element);
  return element;
}

document.getElementById("root").appendChild(component());
