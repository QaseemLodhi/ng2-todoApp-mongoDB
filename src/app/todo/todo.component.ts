import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: any;
  todoList: any;
  constructor(
    private hs: HttpService
  ) { }

  ngOnInit() {
    // this.loadTodos();
  }

  private loadTodos() {
    this.hs.GetRequest('/api/todo').subscribe(res => {
      if (!res.success) {
        console.log(res.error);
      } else {
        console.log('data', res);
        this.todoList = res.data;
      }
    })
  }
  addTodo(valid: any, value: any) {
    event.preventDefault();
    if (!valid || (value.todoTask === undefined)) return;
    console.log()
    let obj = {
      todoTask: value.todoTask,
      completed: false
    }
    value.todoTask = '';
    this.hs.PostRequest('/api/todo', { todo: obj }).subscribe(res => {
      if (!res.success) {
        console.log(res.error);
      } else {
        console.log('data', res);
        this.loadTodos();
      }
    });
  }
  deleteTodo(id: any) {
    this.hs.DeleteRequest('/api/todo/' + id).subscribe(res => {
      if (!res.success) {
        console.log(res.error);
      } else {
        console.log('deleteData', res);
        this.loadTodos();
      }
    })
  }
}
