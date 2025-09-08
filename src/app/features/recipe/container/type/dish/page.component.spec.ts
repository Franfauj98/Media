import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeTypeDishPageComponent} from './page.component';

describe('RecipeContainerComponent', () => {
  let component: RecipeTypeDishPageComponent;
  let fixture: ComponentFixture<RecipeTypeDishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeTypeDishPageComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RecipeTypeDishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
