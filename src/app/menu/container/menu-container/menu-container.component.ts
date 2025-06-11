import { Component, EventEmitter, output } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ComponentLoaderService, MenuItem } from '../../service/component-loader.service';
import { BasicComponent } from '../../../container/basic.component';
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
  templateUrl: './menu-container.component.html',
  standalone: true,
  styleUrl: './menu-container.component.scss'
})
export class MenuContainerComponent {

  public components: MenuItem[];
  public loadPage = output<BasicComponent>();

  constructor(private componentLoaderService: ComponentLoaderService) {

    this.components = this.getComponent();
  }

  protected getComponent(): MenuItem[] {

    return this.componentLoaderService.getComponent();
  }

  protected loadComponent(component: BasicComponent): void {

    this.loadPage.emit(component);
  }
}
