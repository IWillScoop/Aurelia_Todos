import {inject} from 'aurelia-framework';
import {TodoData} from './todoData';

@inject(TodoData)
export class List {
    
    constructor(todoData) {
        this.data = todoData;
    }

    activate() {
        return this.data.getAll()
                        .then(todos => this.todos = todos);
    }
}