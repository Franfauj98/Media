import { Injectable, signal, WritableSignal } from "@angular/core";
import { BasicComponent } from "../../../model/page/basic";
import { AboutComponent } from "../../../../features/about/container/about/about-container.component";
import { RecipeTypeDishPageComponent } from "../../../../features/recipe/container/type/dish/page.component";
import { RecipeContainerListComponent } from "../../../../features/recipe/container/list/recipe.component";

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private components: MenuItem[] = [
    new MenuItem(RecipeTypeDishPageComponent, 'recettes', false),
    new MenuItem(AboutComponent, 'à propos', false),
    new MenuItem(RecipeContainerListComponent, 'Recette', true)
  ];

  componentLoaded: WritableSignal<any> = signal(RecipeTypeDishPageComponent);
  componentType: WritableSignal<COMPONENT_TYPE> = signal(COMPONENT_TYPE.TOUS);

  constructor() { }

  public getComponents(): MenuItem[] {

    return this.components;
  }

  public loadComponent(component: BasicComponent): void {

    this.componentLoaded.set(component);
  }

  public loadComponentInputs(componentType: COMPONENT_TYPE): void {

    this.componentType.set(componentType);
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