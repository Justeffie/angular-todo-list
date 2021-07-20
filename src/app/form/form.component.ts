import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.form = new FormGroup(
      {'todo': new FormControl('', Validators.required)}
    )
  }

  addTodo(): void {
    this.todoService.addTodo(this.todoFormControl().value);
  }

  todoFormControl(): FormControl {
    return this.form.get('todo');
  }
}
