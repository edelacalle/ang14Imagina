import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '08_routing_ma';
  ngOnInit(){
    this.title='08_routing_ma app is running!'
  }
}

