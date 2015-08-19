export class App {

    configureRouter(config, router) {
        this.router = router; 
 
        config.title = "Todos";
        config.map([
            { route: "", name: 'home', moduleId: "todos/list", title:"List", nav:true},
            { route: "about", moduleId: "about/about", title: "About", nav:true },
            { route: "details/:id", name:"details", moduleId: "todos/details" },
            { route: "edit/:id", name:"edit", moduleId: "todos/edit" },
            { route: "create", name:"create", moduleId:"todos/edit" }
        ]);
    }
}