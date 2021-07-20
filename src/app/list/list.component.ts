import {Component, OnDestroy, OnInit} from '@angular/core';
import {TodoService} from '../service/todo.service';
import {Todo} from '../service/todo.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  todosItems: Todo[];
  private subscription: Subscription;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.subscription = this.todoService.todosChanged.subscribe(todos => this.todosItems = todos);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
