import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './container/basic.component';
import { MenuContainerComponent } from "./menu/container/menu-container/menu-container.component";

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

  title = 'FlavorsAndMore';
  componentLoaded: any = null;

  constructor() {
  }

  protected loadComponent(component: BasicComponent): void {

    this.componentLoaded = component;
  }

}