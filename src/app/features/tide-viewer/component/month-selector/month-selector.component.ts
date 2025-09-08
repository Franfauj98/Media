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
  template: `
    <div class="month-selector-container">
      <label for="mois-select">Mois :</label>
      <select id="mois-select" [ngModel]="selectedMonth" (ngModelChange)="onChange($event)" class="month-select">
        <option *ngFor="let month of months" [value]="month.value">{{ month.label }}</option>
      </select>
    </div>
  `,
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
