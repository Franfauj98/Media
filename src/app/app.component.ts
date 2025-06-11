import { Component, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './common/model/basic';
import { MenuContainerComponent } from "./menu/container/menu-container/menu-container.component";
import { RecipeContainerComponent } from './recipe/container/recipe-container/recipe-menu/recipe-container.component';
import { ComponentLoaderService } from './menu/service/component-loader.service';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    MenuContainerComponent
  ],
  providers: [ComponentLoaderService],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Media';
  componentLoaded: any = RecipeContainerComponent;

  constructor(private componentLoaderService: ComponentLoaderService) {
    
    effect(() => {
    
      this.componentLoaded = this.componentLoaderService.componentLoaded()
    })
  }

}