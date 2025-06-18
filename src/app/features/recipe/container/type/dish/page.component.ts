import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { DishCard, DishCardService } from '../../../service/dishCard/dish-card.service';
import { BasicComponent } from '../../../../../shared/model/page/basic';
import { RecipeTypeDishCardComponent } from '../../../component/dish/type/card.component';

@Component({
  selector: 'app-recipe-container',
  imports: [MatButtonModule, MatCardModule, MatIconModule, CommonModule, RecipeTypeDishCardComponent],
  providers: [DishCardService],
  standalone: true,
  templateUrl: './page.component.html',
  styleUrl: './page.component.scss'
})
export class RecipeTypeDishPageComponent implements BasicComponent {

  protected dishCards: DishCard[] = []

  constructor(private dishCardService: DishCardService) {

    this.dishCards = this.dishCardService.getDishCards()
  }
}
