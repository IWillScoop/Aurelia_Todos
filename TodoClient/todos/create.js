import {inject} from "aurelia-framework";
import {TodoData} from "./todoData";
import {Router} from "aurelia-router";
import {Validation} from "aurelia-validation";

@inject(TodoData, Router, Validation)
export class Create {
    constructor(todoData,router,validation) {
        this.data = todoData;
        this.router = router;
        this.validation = validation.on(this)
            .ensure("todo.Title")
                .isNotEmpty()
                .hasMinLength(3)
                .hasMaxLength(150)
            .ensure("todo.Note")
                .hasMaxLength(500);
    }

    activate(params) {
        return "";
    }
    
    save() {
        console.log(this.todo);
        this.validation.validate().then(() => {
            this.data.saveNew(this.todo)
                .then(todo => {
                   let url = this.router.generate("todoDetails", {id: todo.Id})
                   this.router.navigate(url);
                });
        });
        
    }
}