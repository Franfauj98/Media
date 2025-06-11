import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentLoaderService, MenuItem } from './service/component-loader.service';
import { CommonModule } from '@angular/common';
import { BasicComponent } from './container/basic.component';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule, 
    MatIconModule, 
    MatButtonModule, 
    MatMenuModule, 
    CommonModule
  ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'Media';
  componentLoaded: any = null;

  public components: MenuItem[];

  constructor(private componentLoaderService: ComponentLoaderService) {

    this.components = this.getComponent();
  }

  protected getComponent(): MenuItem[] {

    return this.componentLoaderService.getComponent();
  }

  protected loadComponent(component: BasicComponent): void {

    this.componentLoaded = component;
  }

}