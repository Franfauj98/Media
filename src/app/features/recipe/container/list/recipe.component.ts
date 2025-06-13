import { Component, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BasicComponent } from '../../../../shared/model/page/basic';
import { COMPONENT_TYPE, ComponentLoaderService } from '../../../../shared/services/component/loader/component-loader.service';



@Component({
  selector: 'app-recipe-container-list',
  imports: [MatIconModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss'
})
export class RecipeContainerListComponent implements BasicComponent {

  componentType: COMPONENT_TYPE = COMPONENT_TYPE.TOUS;

  constructor(private componentLoaderService: ComponentLoaderService) {

    effect(() => {

      this.componentType = this.componentLoaderService.componentType()
    })
  }

}
