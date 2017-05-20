import { TestBed, inject } from '@angular/core/testing';

import { AdvertsService } from './adverts.service';

describe('AdvertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdvertsService]
    });
  });

  it('should ...', inject([AdvertsService], (service: AdvertsService) => {
    expect(service).toBeTruthy();
  }));
});
