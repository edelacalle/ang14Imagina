import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-navega',
  templateUrl: './navega.component.html',
  styleUrls: ['./navega.component.css']
})
export class NavegaComponent {
  user$: Observable<string>;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor( private breakpointObserver: BreakpointObserver , public store:Store<{ user: string }>) {
    this.user$ = store.select('user');
  }
  

}

/*
constructor(private store: Store<{ count: number }>) {
  this.count$ = store.select('count');
}
*/