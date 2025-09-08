import {Component, Input} from '@angular/core';

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
  styleUrls: ['./maree-day.component.scss']
})
export class MareeDayComponent {
  @Input() day: any;
}

