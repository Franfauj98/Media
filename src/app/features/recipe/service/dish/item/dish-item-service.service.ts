import {Injectable} from '@angular/core';
import {ChipsContent} from '../../../../../shared/model/chips/ChipsContent';
import {DishOverview} from '../../../model/DishOverview';
import {COMPONENT_TYPE} from '../../../../../shared/services/component/loader/component-loader.service';
import Fuse from "fuse.js";

@Injectable({
  providedIn: 'root'
})
export class DishItemServiceService {

  public chipVegetatian: string = 'vegetarian'
  public chipGuilty: string = 'guilty'
  public chipYummy: string = 'yummy'

  public chipsContentMap: Map<string, ChipsContent> = new Map<string, ChipsContent>([
    [this.chipVegetatian, new ChipsContent('grain', 'Végé', 'vegetarian-chip')],
    [this.chipGuilty, new ChipsContent('fastfood', 'Guilty', 'guilty-chip')],
    [this.chipYummy, new ChipsContent('cookie', 'Yummy', 'yummy-chip')]
  ]);

  private dishesFirstMealOverview: DishOverview[] = [
    new DishOverview('rice_bowl', 'Rouleau de printemps', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [this.chipsContentMap.get(this.chipVegetatian)!!, this.chipsContentMap.get(this.chipGuilty)!!, this.chipsContentMap.get(this.chipYummy)!!],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !'
    ),
    new DishOverview('rice_bowl', 'Salade de riz', 'Frais et délicieux', 'rouleau_printemps.jpg', 'Photo of a spring roll',
      [this.chipsContentMap.get(this.chipVegetatian)!!, this.chipsContentMap.get(this.chipGuilty)!!],
      'Enveloppé par une feuille de riz humide et garni d\'ingrédients frais le rouleau de printemps est un délice en toutes saisons.',
      'La recette !'
    )
  ]

  private chipsSelected: ChipsContent[] = []

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

  setChipsSelected(chips: ChipsContent[]): void {
    this.chipsSelected = chips
  }

  getChipsSelected(): ChipsContent[] {
    return this.chipsSelected
  }

}
