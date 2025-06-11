import { Injectable } from "@angular/core";
import { AboutComponent } from "../../about/container/about/about-container.component";
import { RecipeContainerComponent } from "../../recipe/container/recipe-container/recipe-container.component";
import { BasicComponent } from "../../common/model/basic";

@Injectable({
  providedIn: 'root'
})
export class ComponentLoaderService {

  private components: MenuItem[] = [new MenuItem(RecipeContainerComponent, "recettes"), new MenuItem(AboutComponent, "à propos")];

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