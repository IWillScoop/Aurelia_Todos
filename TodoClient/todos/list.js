import {TodoData} from "./todoData";
import {inject} from "aurelia-framework";

@inject(TodoData)
export class List {
    
    constructor(todoData) {
        this.todoData = todoData;
    }
    
    activate() {
       return this.todoData
                    .getAll()
                    .then(todos => this.todos = todos);
    }
}