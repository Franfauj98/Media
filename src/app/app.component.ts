import {Component, effect} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuContainerComponent} from "./shared/components/header/header.component";
import {ComponentLoaderService} from './shared/services/component/loader/component-loader.service';
import {RecipeTypeDishPageComponent} from './features/recipe/container/type/dish/page.component';

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
  componentLoaded: any = RecipeTypeDishPageComponent;

  constructor(private componentLoaderService: ComponentLoaderService) {

    effect(() => {

      this.componentLoaded = this.componentLoaderService.componentLoaded()
    })
  }

}
