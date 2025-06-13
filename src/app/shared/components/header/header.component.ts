import { Component, EventEmitter, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentLoaderService, MenuItem } from '../../services/component/loader/component-loader.service';
import { BasicComponent } from '../../model/page/basic';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-container',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.scss'
})
export class MenuContainerComponent {

  public components: MenuItem[];

  constructor(private componentLoaderService: ComponentLoaderService) {

    this.components = this.getComponent();
  }

  protected getComponent(): MenuItem[] {

    return this.componentLoaderService.getComponents();
  }

  protected loadComponent(component: BasicComponent): void {

    this.componentLoaderService.loadComponent(component)
  }
}
