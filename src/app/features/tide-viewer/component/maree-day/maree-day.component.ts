import {Component, Input} from '@angular/core';
import {MareeCardComponent} from "../maree-card/maree-card.component";
import {CommonModule, DatePipe} from "@angular/common";

@Component({
  selector: 'maree-day',
  templateUrl: './maree-day.component.html',
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
