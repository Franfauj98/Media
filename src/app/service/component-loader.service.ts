import { Injectable } from '@angular/core';
import { BasicComponent } from '../container/basic.component';
import { AboutComponent } from '../about/container/about/about.component';
import { RecipeContainerComponent } from '../recipe/container/recipe-container/recipe-container.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private components: MenuItem[] = [new MenuItem(AboutComponent, "à propos"), new MenuItem(RecipeContainerComponent, "recettes")];

  constructor() { }

  public getComponent(): MenuItem[] {
    return this.components;
  }

}

export class MenuItem {
  component: BasicComponent
  name: string

  constructor(component: BasicComponent, name: string) {
    this.component = component;
    this.name = name;
  }
}