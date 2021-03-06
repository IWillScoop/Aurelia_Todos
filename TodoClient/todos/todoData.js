import {HttpClient} from "aurelia-http-client";
import {inject} from "aurelia-framework";

let baseUrl = "http://localhost:57849/api/todos";
@inject(HttpClient)
export class TodoData {
    
    constructor(httpClient) {
        this.http = httpClient;
    }
    
    getAll() {
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }
    
    getById(id) {
        return this.http.get(`${baseUrl}/${id}`).then(response => response.content);
    }
    
    save(todo) {
        var request = this.http.createRequest();
        request.asPut()
                .withUrl(baseUrl)
                .withHeader("Accept", "application/json")
                .withHeader("Content-Type", "application/json")
                .withContent(todo);
        
        return request.send().then(response => {
            return response.content;
        });
    }
    
    saveNew(todo) {
        var request = this.http.createRequest();
        request.asPost()
                .withUrl(baseUrl)
                .withHeader("Accept", "application/json")
                .withHeader("Content-Type", "application/json")
                .withContent(todo);
        
        return request.send().then(response => response.content);
    }
    
    deleteTodo(todo) {
        let todoId = {Id: todo.Id};
        var request = this.http.createRequest();
        console.log(todoId);
        request.asDelete()
                .withUrl(`${baseUrl}/${todo.Id}`)
                .withHeader("Accept", "application")
                .withHeader("Content-Type", "application/json")
                .withContent(todoId);
        
        return request.send().then(response => response.content);
    }
}