import {Component, Input, OnInit} from '@angular/core';
import {TodoService} from '../service/todo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  deleteTodo(): void {
    this.todoService.deleteTodo(this.todo);
  }
}
