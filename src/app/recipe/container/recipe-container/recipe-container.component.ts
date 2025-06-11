import { Component } from '@angular/core';
import { BasicComponent } from '../../../common/model/basic';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DishCard, DishCardService } from '../../service/dishCard/dish-card.service';
import { DishCardComponent } from "../../component/dish-card/dish-card.component";

@Component({
  selector: 'app-recipe-container',
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule, DishCardComponent],
  providers: [DishCardService],
  standalone: true,
  templateUrl: './recipe-container.component.html',
  styleUrl: './recipe-container.component.scss'
})
export class RecipeContainerComponent implements BasicComponent {

  protected dishCards: DishCard[] = [] 

  constructor(private dishCardService: DishCardService) {

    this.dishCards = this.dishCardService.getDishCards()
  }
}
