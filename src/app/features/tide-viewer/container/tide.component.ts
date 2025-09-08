import {Component, OnInit} from '@angular/core';
import {MareeDay, TideService} from '../service/tide.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './tide.component.html',
  styleUrls: ['./tide.component.scss'], // passage au SCSS
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [TideService]
})
export class TideComponent implements OnInit {
  marees: MareeDay[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 1;

  constructor(private tideService: TideService) {
  }

  ngOnInit() {
    this.tideService.getMarees().subscribe((data: MareeDay[]) => {
      this.marees = data;
      this.totalPages = Math.ceil(this.marees.length / this.pageSize);
    });
  }

  get pagedMarees(): MareeDay[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.marees.slice(start, start + this.pageSize);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
