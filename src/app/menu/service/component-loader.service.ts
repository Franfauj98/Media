import { Injectable, signal, WritableSignal } from "@angular/core";
import { AboutComponent } from "../../about/container/about/about-container.component";
import { RecipeContainerComponent } from "../../recipe/container/recipe-container/recipe-menu/recipe-container.component";
import { BasicComponent } from "../../common/model/basic";
import { RecipePageComponent } from "../../recipe/container/page/recipe-page/recipe-page.component";

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private components: MenuItem[] = [
    new MenuItem(RecipeContainerComponent, 'recettes', false), 
    new MenuItem(AboutComponent, 'à propos', false),
    new MenuItem(RecipePageComponent, 'Recette', true)
  ];

  componentLoaded: WritableSignal<any> = signal(RecipeContainerComponent);

  constructor() { }

  public getComponents(): MenuItem[] {
    
    return this.components;
  }

  public loadComponent(component: BasicComponent): void {
    
    this.componentLoaded.set(component);
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