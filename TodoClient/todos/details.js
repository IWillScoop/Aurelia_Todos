import {TodoData} from "./todoData";
import {inject} from "aurelia-framework";

@inject(TodoData)
export class Details {
    
    constructor(todoData) {
        this.data = todoData;
    }
    
    activate(params) {
        return this.data.getById(params.id)
                    .then(todo => this.todo = todo);
    }
}