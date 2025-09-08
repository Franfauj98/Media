import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DishOverviewCardComponent} from './dish-overview-card.component';

describe('DishOverviewCardComponent', () => {
  let component: DishOverviewCardComponent;
  let fixture: ComponentFixture<DishOverviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DishOverviewCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DishOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
