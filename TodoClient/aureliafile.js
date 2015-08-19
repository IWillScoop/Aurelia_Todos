var aurelia = require("aurelia-cli");

aurelia.command("bundle", {
    js: {
        "wwwroot/appbundle": {
            modules: [
              "app", "main", "about/**", "todos/**", "resources/**",
              "aurelia-bootstrapper",
              "aurelia-router",
              "aurelia-http-client",
              "aurelia-validation"
            ],
            options: {
                inject: true
            }
        }
    },
    template: {
        "wwwroot/appbundle": {
            pattern: "ignorefornow",
            options: {
                inject: true,
            }
        }
    }
});