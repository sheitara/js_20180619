import {Component} from '../component';
import style from './messages.scss';

export class Messages extends Component {

    render() {
        this.node.innerHTML += `
      <div class="message">${this.data.message}</div>
    `;}
}