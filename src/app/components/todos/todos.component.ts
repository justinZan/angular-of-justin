import { addTodo, deleteTodo } from './../../store/actions/todos.actions';
import { Store, select } from '@ngrx/store';
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AppState } from 'src/app/store';
import { fromEvent, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Todo } from 'src/app/store/reducers/todos.reducer';
import { selectTodos } from 'src/app/store/selectors/todos.selectors';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements AfterViewInit {
  @ViewChild('AddTodoInput') AddTodoInput!: ElementRef;

  public todoList: Observable<Todo[]>;
  constructor(private store: Store<AppState>) {
    this.todoList = this.store.pipe(select(selectTodos));
  }

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.AddTodoInput.nativeElement, 'keyup').pipe(
      filter(event => event.key === 'Enter'),
      map(event => (event.target as HTMLInputElement).value),
      map(title => title.trim()),
      filter(title => title !== '')
    ).subscribe((title) => {
      this.store.dispatch(addTodo({ title }));
      this.AddTodoInput.nativeElement.value = '';
    }

    );
  }

  deleteHandle(id) {
    this.store.dispatch(deleteTodo({ id }));
  }
}
