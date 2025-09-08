import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'marees-pagination',
  template: `
    <div class="pagination">
      <button (click)="prevPage()" [disabled]="currentPage === 1">Précédent</button>
      <span>Page {{ currentPage }} / {{ totalPages }}</span>
      <button (click)="nextPage()" [disabled]="currentPage === totalPages">Suivant</button>
    </div>
  `,
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

