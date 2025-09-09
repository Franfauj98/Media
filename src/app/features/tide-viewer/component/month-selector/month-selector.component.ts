import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

const MONTHS = [
  {value: 'septembre', label: 'Septembre'},
  {value: 'octobre', label: 'Octobre'},
  {value: 'novembre', label: 'Novembre'}
];

@Component({
  selector: 'month-selector',
  templateUrl: './month-selector.component.html',
  standalone: true,
  imports: [
    FormsModule, CommonModule
  ],
  styleUrls: ['./month-selector.component.scss']
})
export class MonthSelectorComponent {
  @Input() selectedMonth: string = MONTHS[0].value;
  @Output() selectedMonthChange = new EventEmitter<string>();

  months = MONTHS;

  onChange(month: string) {
    this.selectedMonthChange.emit(month);
  }
}
