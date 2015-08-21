export class App {

    configureRouter(config, router) {
        this.router = router;
        
        config.map([
            { route: ["", "list"], moduleId: "todos/list", title:"Todos", nav:true, name:"home"},
            { route: "about", moduleId: "about/about", title:"About", nav:true},
            { route: "details/:id", moduleId:"todos/details", name:"todoDetails"},
            { route: "edit/:id", moduleId:"todos/edit", name:"todoEdit"},
            { route: "create", moduleId: "todos/create", name:"todoCreate"}
        ]);
    }
    
}