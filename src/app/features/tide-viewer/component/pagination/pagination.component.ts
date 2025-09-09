import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule, DatePipe} from "@angular/common";
import {MareeCardComponent} from "../maree-card/maree-card.component";

@Component({
  selector: 'marees-pagination',
  templateUrl: './pagination.component.html',
  imports: [
    DatePipe,
    MareeCardComponent,
    CommonModule
  ],
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
}
