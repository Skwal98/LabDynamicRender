import { Component, OnInit } from '@angular/core';
import { InfoButtonComponent } from '../info-button/info-button.component';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss'],
  providers: [
    {
      provide: InfoButtonComponent,
      useValue: InfoButtonComponent,
    },
  ],
})
export class ApplicationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
