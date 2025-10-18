import {Injectable, signal, WritableSignal} from "@angular/core";
import {BasicComponent} from "../../../model/page/basic";
import {AboutComponent} from "../../../../features/about/container/about/about-container.component";
import {RecipeTypeDishPageComponent} from "../../../../features/recipe/container/type/dish/page.component";
import {RecipeContainerListComponent} from "../../../../features/recipe/container/list/recipe.component";
import {TideComponent} from "../../../../features/tide-viewer/container/tide.component";
import {Recipe} from "../../../../features/recipe/model/Recipe";
import {RecipeItemContainerComponent} from "../../../../features/recipe/container/item/recipe-item-container.component";
import {DishOverview} from "../../../../features/recipe/model/DishOverview";

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private components: MenuItem[] = [
    new MenuItem(RecipeTypeDishPageComponent, 'Recettes', false),
    new MenuItem(RecipeContainerListComponent, 'Recette', true),
    new MenuItem(RecipeItemContainerComponent, 'RecetteItem', true),
    new MenuItem(TideComponent, 'Marées', false),
    new MenuItem(AboutComponent, 'À propos', false),
  ];

  componentLoaded: WritableSignal<any> = signal(RecipeTypeDishPageComponent);
  componentType: WritableSignal<COMPONENT_TYPE> = signal(COMPONENT_TYPE.TOUS);
  componentContent: WritableSignal<DishOverview> = signal(new DishOverview('', '', '', '', '', [], '', '', new Recipe([], [], 0, 0, 0, '')));

  constructor() {
  }

  public getComponents(): MenuItem[] {

    return this.components;
  }

  public loadComponent(component: BasicComponent): void {

    this.componentLoaded.set(component);
  }

  public loadComponentInputs(componentType: COMPONENT_TYPE): void {

    this.componentType.set(componentType);
  }

  public loadComponentContent(content: DishOverview): void {

    this.componentContent.set(content);
  }

}

export class MenuItem {
  component: BasicComponent
  name: string
  hide: boolean

  constructor(component: BasicComponent, name: string, hide: boolean) {
    this.component = component;
    this.name = name;
    this.hide = hide
  }
}

export enum COMPONENT_TYPE {
  ENTREE,
  PLAT,
  DESSERT,
  TOUS
}
