import {Component, effect} from '@angular/core';
import {ComponentLoaderService} from "../../../../shared/services/component/loader/component-loader.service";
import {Recipe} from "../../model/Recipe";
import {DishOverview} from "../../model/DishOverview";
import {NgIf} from "@angular/common";
import {MatMiniFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {RecipeContainerListComponent} from "../list/recipe.component";

@Component({
  selector: 'app-recipe-item-container',
  imports: [
    NgIf,
    MatIcon,
    MatMiniFabButton
  ],
  templateUrl: './recipe-item-container.component.html',
  styleUrl: './recipe-item-container.component.scss'
})
export class RecipeItemContainerComponent {

  public dishOverview: DishOverview = new DishOverview('', '', '', '', '', [], '', '', new Recipe([], [], 0, 0, 0, ''))

  constructor(private componentLoaderService: ComponentLoaderService) {

    effect(() => {

      this.dishOverview = this.componentLoaderService.componentContent()
      console.log(this.dishOverview)
    })
  }


  previousPage() {

    this.componentLoaderService.loadComponent(RecipeContainerListComponent)
  }
}
