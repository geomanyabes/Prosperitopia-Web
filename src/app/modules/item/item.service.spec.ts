import { TestBed } from '@angular/core/testing';
import { ItemModule } from './item.module';

import { ItemService } from './item.service';

describe('ItemService', () => {
  let service: ItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ItemModule]
    });
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
