import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {PaceComponent} from "../../component/pace/pace.component";

@Component({
  selector: 'app-running-app',
  templateUrl: './running-app.component.html',
  styleUrl: './running-app.component.scss',
  standalone: true,
  imports: [CommonModule, PaceComponent],
  providers: []
})
export class RunningAppComponent {

}
