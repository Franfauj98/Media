import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BasicComponent } from '../../../../shared/model/page/basic';
import { COMPONENT_TYPE, ComponentLoaderService } from '../../../../shared/services/component/loader/component-loader.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recipe-container-list',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,
    MatButtonModule, MatBottomSheetModule, MatPaginatorModule,
    MatListModule, MatCardModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeContainerListComponent implements BasicComponent {

  componentType: COMPONENT_TYPE = COMPONENT_TYPE.TOUS;

  private _bottomSheet = inject(MatBottomSheet);

  constructor(private componentLoaderService: ComponentLoaderService) {

    effect(() => {

      this.componentType = this.componentLoaderService.componentType()
    })
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RecipeFilterComponent);
  }

}

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.html',
  imports: [MatListModule],
})
export class RecipeFilterComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<RecipeFilterComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
