import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './common/model/basic';
import { MenuContainerComponent } from "./menu/container/menu-container/menu-container.component";
import { RecipeContainerComponent } from './recipe/container/recipe-container/recipe-container.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MenuContainerComponent
],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Media';
  componentLoaded: any = RecipeContainerComponent;

  constructor() {
  }

  protected loadComponent(component: BasicComponent): void {

    this.componentLoaded = component;
  }

}