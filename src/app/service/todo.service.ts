import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Todo} from './todo.model';

@Injectable()
export class TodoService {

  todosChanged = new Subject<Todo[]>();
  private todos: Todo[] = [];
  private id = 0;

  constructor() {}

  addTodo(todo: string) {
    this.todos.push(new Todo(this.id, todo));
    this.todosChanged.next(this.todos.slice());
    ++this.id;
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    this.todosChanged.next(this.todos.slice());
  }

  updateTodo(todo: Todo) {
    const index = this.todos.findIndex(td => td.id === todo.id);
    this.todos[index].tachado = todo.tachado;
    this.todosChanged.next(this.todos.slice());
  }
}
