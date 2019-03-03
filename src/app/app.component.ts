import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Academics';
  constructor() {
    
  }
  ngOnInit() {

  }

}
