import {inject} from "aurelia-framework";
import {TodoData} from "./todoData";
import {Router} from "aurelia-router";

@inject(TodoData, Router)
export class Edit {
    constructor(todoData,router) {
        this.data = todoData;
        this.router = router;
    }

    activate(params) {
        return this.data.getById(params.id)
                    .then(todo => this.todo = todo);
    }
    
    save() {
        this.todo.Modified = new Date();
        console.log(this.todo);
        this.data.save(this.todo)
                    .then(todo => {
                       let url = this.router.generate("details", {id: todo.Id})
                       this.router.navigate(url);
                    });
    }
}