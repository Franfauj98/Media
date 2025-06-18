import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeTypeDishCardComponent } from './card.component';

describe('DishCardComponent', () => {
  let component: RecipeTypeDishCardComponent;
  let fixture: ComponentFixture<RecipeTypeDishCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeTypeDishCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeTypeDishCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
