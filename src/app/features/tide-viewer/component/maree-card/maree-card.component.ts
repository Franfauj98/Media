import {Component, Input} from '@angular/core';

@Component({
  selector: 'maree-card',
  templateUrl: './maree-card.component.html',
  styleUrls: ['./maree-card.component.scss']
})
export class MareeCardComponent {
  @Input() tide: any;
}
