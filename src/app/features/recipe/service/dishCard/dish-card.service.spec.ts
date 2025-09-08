import {TestBed} from '@angular/core/testing';

import {DishCardService} from './dish-card.service';

describe('DishCardService', () => {
  let service: DishCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
