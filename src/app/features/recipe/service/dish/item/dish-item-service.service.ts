import {Injectable} from '@angular/core';
import {ChipsContent} from '../../../../../shared/model/chips/ChipsContent';
import {DishOverview} from '../../../model/DishOverview';
import {COMPONENT_TYPE} from '../../../../../shared/services/component/loader/component-loader.service';
import Fuse from "fuse.js";

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
    new DishOverview('rice_bowl', 'Salade de riz', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [new ChipsContent('grain', 'Végé', 'vegetarian-chip'), new ChipsContent('fastfood', 'Guilty', 'guilty-chip'),
        new ChipsContent('cookie', 'Yummy', 'yummy-chip')],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !'
    )
  ]

  private dishesMainMealOverview: DishOverview[] = []

  private dishesDesertOverview: DishOverview[] = []

  private searchFirstDish: any;

  constructor() {
    this.searchFirstDish = new Fuse(this.dishesFirstMealOverview, {keys: ['headerTitle']})
  }

  getDishesFirstMealOverview(): DishOverview[] {
    return this.dishesFirstMealOverview
  }

  getDishesMainMealOverview(): DishOverview[] {
    return this.dishesMainMealOverview
  }

  getDishesDesertOverview(): DishOverview[] {
    return this.dishesDesertOverview
  }

  getDishesOverviewByType(componentType: COMPONENT_TYPE): DishOverview[] {
    switch (componentType) {
      case COMPONENT_TYPE.ENTREE:
        return this.dishesFirstMealOverview
      case COMPONENT_TYPE.PLAT:
        return this.dishesMainMealOverview
      case COMPONENT_TYPE.DESSERT:
        return this.dishesDesertOverview
      default:
        return []
    }
  }

  searchDishesFirstMealOverview(element: string): any[] {
    return this.searchFirstDish.search(element)
  }

}
