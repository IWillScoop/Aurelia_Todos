import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://localhost:57849/api/Todos";
let parse = message => JSON.parse(message.response);

@inject(HttpClient)
export class TodoData {
    
    constructor(httpClient) {
        this.http = httpClient;
        this.http.configure(c => {
            c.withBaseUrl(baseUrl);
            c.withHeader("Accept", "application/json");
            c.withHeader("Content-Type", "application/json");
        });

    }

    getById(id) {
        return this.http.get(`/${id}`)
                        .then(parse);
    }

    getAll() {
        return this.http.get().then(parse);
    }

    save(todo) {
        if(todo.Id) {
            return this.http.put('', todo).then(parse);                          
        }
        return this.http.post('', todo).then(parse);
    }
}