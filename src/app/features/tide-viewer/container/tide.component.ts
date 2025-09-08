import {Component, OnInit} from '@angular/core';
import {MareeDay, TideService} from '../service/tide.service';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MareesViewerComponent} from '../component/marees-viewer.component';

@Component({
  selector: 'app-root',
  templateUrl: './tide.component.html',
  styleUrls: ['./tide.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, MareesViewerComponent],
  providers: []
})
export class TideComponent {

  constructor() {
  }

}
