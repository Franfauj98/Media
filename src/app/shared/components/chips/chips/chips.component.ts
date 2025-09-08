import {Component, Input} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import {ChipsContent} from '../../../model/chips/ChipsContent';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-chips',
  imports: [MatChipsModule, MatIconModule, CommonModule],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.scss'
})
export class ChipsComponent {
  @Input({required: true}) public chips!: ChipsContent[]
}
