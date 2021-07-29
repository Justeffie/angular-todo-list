import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../service/todo.service';
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as regularStar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo;
  solidStar = solidStar;
  regularStar = regularStar;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo);
  }

  tachar(): void {
    this.todo.tachado = !this.todo.tachado;
    this.todoService.updateTodo(this.todo);
  }

  updateImportant(): void {
    this.todo.important = !this.todo.important;
    this.todoService.updateTodo(this.todo);
  }
}
