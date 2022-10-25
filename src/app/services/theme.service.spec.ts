import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have false boolean', () => {
    expect(service.dark).toBeFalse();
  })

  it('should make boolean true through method call', () => {
    service.darkToggle();
    expect(service.dark).toBeTrue();
  })
});
