import { TestBed } from '@angular/core/testing';

import { GetForecastService } from '../../services/get-forecast.service';

describe('GetForecastService', () => {
  let service: GetForecastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetForecastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
