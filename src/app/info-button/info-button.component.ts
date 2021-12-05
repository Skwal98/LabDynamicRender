import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: '[dd]',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss'],
})
export class InfoButtonComponent implements OnInit {
  rnd!: number;

  constructor() {}

  ngOnInit(): void {
    this.rnd = Math.random();
  }
}
