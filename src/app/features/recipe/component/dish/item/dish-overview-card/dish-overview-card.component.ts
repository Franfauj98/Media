import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {ChipsComponent} from "../../../../../../shared/components/chips/chips/chips.component";
import {CommonModule} from '@angular/common';
import {DishOverview} from '../../../../model/DishOverview';

@Component({
  selector: 'app-dish-overview-card',
  imports: [MatCardModule, MatIconModule, MatButtonModule, ChipsComponent, CommonModule],
  templateUrl: './dish-overview-card.component.html',
  styleUrl: './dish-overview-card.component.scss',
  standalone: true
})
export class DishOverviewCardComponent {

  @Input({required: true}) public dishOverview!: DishOverview

}
