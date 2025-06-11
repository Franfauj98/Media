import { Component } from '@angular/core';
import { BasicComponent } from '../../../common/model/basic';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-container',
  imports: [MatCardModule, MatButtonModule, MatCardModule, MatIconModule],
  standalone: true,
  templateUrl: './recipe-container.component.html',
  styleUrl: './recipe-container.component.scss'
})
export class RecipeContainerComponent implements BasicComponent {

}
