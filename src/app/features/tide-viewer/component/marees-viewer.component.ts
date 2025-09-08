import {Component, OnInit} from '@angular/core';
import {MareeDayComponent} from "./maree-day.component";
import {PaginationComponent} from "./pagination.component";
import {MareeDay, TideService} from "../service/tide.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'marees-viewer',
  template: `
    <div class="marees-container">
      <h1>
        <span class="icon">🌊</span>
        Horaires des marées - Septembre 2025
        <span class="icon">🕒</span>
      </h1>
      <maree-day *ngFor="let day of pagedMarees" [day]="day"></maree-day>
      <marees-pagination
        [currentPage]="currentPage"
        [totalPages]="totalPages"
        (pageChange)="onPageChange($event)"></marees-pagination>
    </div>
  `,
  imports: [
    MareeDayComponent,
    PaginationComponent,
    CommonModule
  ],
  providers: [HttpClientModule, TideService],
  styleUrls: ['./marees-viewer.component.scss']
})
export class MareesViewerComponent implements OnInit {
  marees: MareeDay[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 1;

  constructor(private mareesService: TideService) {
  }

  ngOnInit() {
    this.mareesService.getMarees().subscribe((data: MareeDay[]) => {
      this.marees = data;
      this.totalPages = Math.ceil(this.marees.length / this.pageSize);
    });
  }

  get pagedMarees(): MareeDay[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.marees.slice(start, start + this.pageSize);
  }

  onPageChange(page: number) {
    this.currentPage = page;
  }
}

