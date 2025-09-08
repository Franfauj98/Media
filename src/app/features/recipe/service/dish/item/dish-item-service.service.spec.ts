import {TestBed} from '@angular/core/testing';

import {DishItemServiceService} from './dish-item-service.service';

describe('DishItemServiceService', () => {
  let service: DishItemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DishItemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
