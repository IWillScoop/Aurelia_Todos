var aurelia = require("aurelia-cli");

aurelia.command("bundle", {
    js: {
        "dist/appbundle" : {
            modules: [
                'app', "main", "about/**", "todos/**",
                "aurelia-bootstrapper",
                "aurelia-framework",
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
        "dist/appbundle": {
            pattern: "ignorefornow",
            options: {
                inject: true,
            }
        }
    }

});