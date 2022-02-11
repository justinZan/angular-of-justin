import { increment, decrement, asyncIncrement } from './../../store/actions/counter.actions';
import { Observable } from 'rxjs';
import { AppState } from './../../store/index';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectCount } from 'src/app/store/selectors/counter.selectors';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  count: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.count = this.store.pipe(select(selectCount));
  }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment({ count: 5 }));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  asyncIncrement() {
    this.store.dispatch(asyncIncrement());
   }

}
