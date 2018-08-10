import {Button} from './components/button/button';
import {Field} from './components/field/field';
import {Messages} from './components/messages/messages';
import {Users} from './components/users/users';

window.addEventListener('DOMContentLoaded', function () {
    let button = new Button({
        data: {
            text: 'Hello world'
        },
        node: document.querySelector('.root')
    });


    let field = new Field({
        data: {
            text: 'Input text here'
        },
        node: document.querySelector('.root')
    });

    let messages = new Messages({
        data: {
            message: ['Доброго всем дня'],
        },
        node: document.querySelector('.root')
    });

    let users = new Users({
        data: {
            Users: [
                'Astera',
                'NoNe',
                'Вышегода',
                'Гость'
            ]
        },
        node: document.querySelector('.root')
    });


    button.render();
    field.render();
    users.render();
    messages.render();

});