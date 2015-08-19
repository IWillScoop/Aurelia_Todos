import {inject} from "aurelia-framework";
import {Validation} from "aurelia-validation"
import {TodoData} from "./todoData"
import {Router} from "aurelia-router";

@inject(TodoData, Validation, Router)
export class Edit {

    constructor(todoData, validation, router) {
        this.data = todoData;
        this.router = router;
        this.validation = validation.on(this)
            .ensure('todo.Title') 
              .isNotEmpty()
              .hasMinLength(3)
              .hasMaxLength(100)
            .ensure('todo.Note') 
              .hasMaxLength(400);
    }

    activate(params) {
        if(params.id) {
            this.data.getById(params.id).then(todo => {
                this.todo = todo;
                this.validation.validate();
            });
        }
        else {
            this.todo = {};
        }
    }

    save() {
        this.validation.validate().then(() => {
            return this.data.save(this.todo);
        }).then(todo => {
            console.log(todo);
            let url = this.router.generate("details", { id: todo.Id});
            this.router.navigate(url);
        });
    }

}