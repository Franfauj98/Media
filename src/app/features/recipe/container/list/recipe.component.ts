import {ChangeDetectionStrategy, ChangeDetectorRef, Component, effect, inject} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {BasicComponent} from '../../../../shared/model/page/basic';
import {
  COMPONENT_TYPE,
  ComponentLoaderService
} from '../../../../shared/services/component/loader/component-loader.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatBottomSheet, MatBottomSheetModule, MatBottomSheetRef,} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {DishOverviewCardComponent} from "../../component/dish/item/dish-overview-card/dish-overview-card.component";
import {CommonModule} from '@angular/common';
import {DishItemServiceService} from '../../service/dish/item/dish-item-service.service';
import {DishOverview} from '../../model/DishOverview';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChipsContent} from "../../../../shared/model/chips/ChipsContent";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-recipe-container-list',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule,
    MatButtonModule, MatBottomSheetModule, MatPaginatorModule,
    MatListModule, MatCardModule, MatChipsModule, DishOverviewCardComponent,
    CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeContainerListComponent implements BasicComponent {

  componentType: COMPONENT_TYPE = COMPONENT_TYPE.TOUS;

  private _bottomSheet = inject(MatBottomSheet);

  dishOverviews: DishOverview[] = []

  search: FormControl = new FormControl('')

  triggerFilter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor(private componentLoaderService: ComponentLoaderService,
              private dishItemServiceService: DishItemServiceService,
              private cdr: ChangeDetectorRef) {

    effect(() => {

      this.componentType = this.componentLoaderService.componentType()
      this.dishOverviews = this.dishItemServiceService.getDishesOverviewByType(this.componentType)
    })

    this.search.valueChanges
      .subscribe(searchValue => {

        const foundedDishes = this.dishItemServiceService.searchDishesFirstMealOverview(searchValue);

        if (foundedDishes.length > 0) {
          this.dishOverviews = foundedDishes.map(serchResult => serchResult.item)
        } else if (searchValue.length === 0) {
          this.dishOverviews = this.dishItemServiceService.getDishesOverviewByType(this.componentType)
        } else {
          this.dishOverviews = []
        }
      })

    this.triggerFilter.subscribe(() => {

      const selectedChips = this.dishItemServiceService.getChipsSelected();
      const allDishes = this.dishItemServiceService.getDishesOverviewByType(this.componentType);

      this.dishOverviews = [...(selectedChips.length === 0
        ? allDishes
        : allDishes.filter(dish => dish.chips.filter(chip => selectedChips.filter(schip => schip.label === chip.label).length > 0).length > 0))]

      this.cdr.markForCheck()
    })
  }

  openBottomSheet(): void {
    this._bottomSheet.open(RecipeFilterComponent)
      .afterDismissed()
      .subscribe(() => {
        this.triggerFilter.next(true);
      });

  }

}

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.html',
  styleUrl: './recipe-filter.component.scss',
  imports: [MatListModule],
})
export class RecipeFilterComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<RecipeFilterComponent>>(MatBottomSheetRef);

  chipsContent: ChipsContent[] = []
  chipsSelected: ChipsContent[] = []

  constructor(private dishItemServiceService: DishItemServiceService) {
    this.chipsContent = Array.from(this.dishItemServiceService.chipsContentMap.values())
    this.chipsSelected = this.dishItemServiceService.getChipsSelected()
  }

  selectChip(event: MouseEvent, selected: ChipsContent): void {
    this.chipsSelected.includes(selected) ?
      this.dishItemServiceService.setChipsSelected(this.chipsSelected.filter(chip => chip !== selected)) :
      this.dishItemServiceService.setChipsSelected([...this.chipsSelected, selected])
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  isChipSelected(chip: ChipsContent): boolean {
    return this.chipsSelected.includes(chip)
  }
}
