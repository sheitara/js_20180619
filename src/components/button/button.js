import {Component} from '../component';
import style from './button.scss';

export class Button extends Component {

  render() {
    this.node.innerHTML += `
      <button class="button">${this.data.text}</button>
    `;
  }

}
