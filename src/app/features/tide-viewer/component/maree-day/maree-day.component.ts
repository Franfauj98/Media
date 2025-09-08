import {Component, Input} from '@angular/core';
import {MareeCardComponent} from "../maree-card/maree-card.component";
import {CommonModule, DatePipe} from "@angular/common";

@Component({
  selector: 'maree-day',
  template: `
    <div class="maree-day">
      <h2>{{ day?.date | date:'EEEE d MMMM yyyy' }}</h2>
      <div class="marees-cards">
        <maree-card *ngFor="let tide of day?.tides" [tide]="tide"></maree-card>
      </div>
    </div>
  `,
  imports: [
    MareeCardComponent,
    DatePipe,
    CommonModule
  ],
  styleUrls: ['./maree-day.component.scss']
})
export class MareeDayComponent {
  @Input() day: any;
}
