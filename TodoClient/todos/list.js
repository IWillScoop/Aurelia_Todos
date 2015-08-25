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
    
    clearCompleted(todos) {
        let deletedTodos = todos.filter(todo => todo.IsChecked);
        for(let i = 0; i < deletedTodos.length; i++) {
            this.data.deleteTodo(deletedTodos[i]);
        }
        this.todos = todos.filter(todo => !todo.IsChecked);
        return this.todos;
    }
}