import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { COMPONENT_TYPE, ComponentLoaderService } from '../../../../../shared/services/component/loader/component-loader.service';
import { RecipeContainerListComponent } from '../../../container/list/recipe.component';

@Component({
  selector: 'app-dish-card',
  imports: [MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class RecipeTypeDishCardComponent {

  @Input({ required: true }) public title!: String
  @Input({ required: true }) public subTitle!: String
  @Input({ required: true }) public content!: String
  @Input({ required: true }) public buttonTitle!: String
  @Input({ required: true }) public photo!: String
  @Input({ required: true }) public icon!: String
  @Input({ required: true }) public dishType!: COMPONENT_TYPE

  constructor(private componentLoaderService: ComponentLoaderService) { }

  loadRecipePage() {

    this.componentLoaderService.loadComponentInputs(this.dishType)
    this.componentLoaderService.loadComponent(RecipeContainerListComponent)
  }
}
