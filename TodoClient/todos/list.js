import {TodoData} from "./todoData";
import {inject} from "aurelia-framework";
import {Router} from "aurelia-router";

@inject(TodoData, Router)
export class List {
    
    constructor(todoData, router) {
        this.data = todoData;
        this.router = router;
    }
    
    activate() {
       return this.data
                    .getAll()
                    .then(todos => this.todos = todos);
    }
    
    check(todo) {
        this.data.save(todo).then(todo => {this.activate();});
    }
}