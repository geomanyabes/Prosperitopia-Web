import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SharedModule } from '../../../shared/shared.module';

import { HttpService } from './http-service.service';

describe('HttpServiceService', () => {
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule, 
        HttpClientModule
      ]
    });
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
