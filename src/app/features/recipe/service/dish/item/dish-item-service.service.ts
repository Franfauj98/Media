import { Injectable } from '@angular/core';
import { ChipsContent } from '../../../../../shared/model/chips/ChipsContent';
import { DishOverview } from '../../../model/DishOverview';

@Injectable({
  providedIn: 'root'
})
export class DishItemServiceService {

  private dishesFirstMealOverview: DishOverview[] = [
    new DishOverview('rice_bowl', 'Rouleau de printemps', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [new ChipsContent('grain', 'Végé', 'vegetarian-chip'), new ChipsContent('fastfood', 'Guilty', 'guilty-chip'),
      new ChipsContent('cookie', 'Yummy', 'yummy-chip')],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !'
    ),
    new DishOverview('rice_bowl', 'Rouleau de printemps', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [new ChipsContent('grain', 'Végé', 'vegetarian-chip'), new ChipsContent('fastfood', 'Guilty', 'guilty-chip'),
      new ChipsContent('cookie', 'Yummy', 'yummy-chip')],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !'
    )
  ]

  constructor() { }

  getDishesFirstMealOverview() {
    return this.dishesFirstMealOverview
  }

}
