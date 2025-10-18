import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RecipeItemContainerComponentComponent} from './recipe-item-container.component';

describe('RecipeItemContainerComponentComponent', () => {
  let component: RecipeItemContainerComponentComponent;
  let fixture: ComponentFixture<RecipeItemContainerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeItemContainerComponentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RecipeItemContainerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
