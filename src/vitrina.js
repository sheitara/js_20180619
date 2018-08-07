import {Button} from './components/button/button';

window.addEventListener('DOMContentLoaded', function () {
  let button = new Button({
    data: {
      text: 'Hello world'
    },
    node: document.querySelector('.root')
  });

  button.render();
});