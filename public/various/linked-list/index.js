import { LinkedList } from './linked-list.js';

const list = new LinkedList();
list.unshift('Bob');
list.unshift('Bull');

const output = document.createElement('pre');
output.textContent = JSON.stringify(list, null, 2);

const rootElement = document.getElementById('root');
rootElement.appendChild(output);
