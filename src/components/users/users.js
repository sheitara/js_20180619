import {Component} from '../component';
import style from './users.scss';

export class Users extends Component {

    render() {
        this.node.innerHTML += `
<ul class="users">
    <li class="user">${this.data.Users[0]}</li>
    <li class="user">${this.data.Users[1]}</li>
    <li class="user">${this.data.Users[2]}</li>
</ul>
`;}
}