import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { COMPONENT_TYPE, ComponentLoaderService } from '../../../menu/service/component-loader.service';
import { RecipePageComponent } from '../../container/page/recipe-page/recipe-page.component';

@Component({
  selector: 'app-dish-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.scss'
})
export class DishCardComponent {

  @Input({ required: true }) public title!: String
  @Input({ required: true }) public subTitle!: String
  @Input({ required: true }) public content!: String
  @Input({ required: true }) public buttonTitle!: String
  @Input({ required: true }) public photo!: String
  @Input({ required: true }) public icon!: String
  @Input({ required: true }) public dishType!: COMPONENT_TYPE

  constructor(private componentLoaderService: ComponentLoaderService) {
  }

  loadRecipePage() {

    this.componentLoaderService.loadComponentInputs(this.dishType)
    this.componentLoaderService.loadComponent(RecipePageComponent)
  }
}
