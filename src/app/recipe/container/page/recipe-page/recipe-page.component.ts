import { Component, effect } from '@angular/core';
import { BasicComponent } from '../../../../common/model/basic';
import { COMPONENT_TYPE, ComponentLoaderService } from '../../../../menu/service/component-loader.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recipe-page',
  imports: [MatIconModule],
  templateUrl: './recipe-page.component.html',
  styleUrl: './recipe-page.component.scss'
})
export class RecipePageComponent implements BasicComponent {

  componentType: COMPONENT_TYPE = COMPONENT_TYPE.TOUS;

  constructor(private componentLoaderService: ComponentLoaderService) {

    effect(() => {

      this.componentType = this.componentLoaderService.componentType()
    })
  }

}
