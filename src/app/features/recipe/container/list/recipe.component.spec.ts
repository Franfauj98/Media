import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeContainerListComponent } from './recipe.component';

describe('RecipePageComponent', () => {
  let component: RecipeContainerListComponent;
  let fixture: ComponentFixture<RecipeContainerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeContainerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeContainerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
