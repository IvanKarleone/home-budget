import { TestBed } from '@angular/core/testing';
import { LocalStorageService } from '@shared/api';

import { ThemeStorageService } from './theme-storage.service';

describe('ThemeService', () => {
  let themeStorageService: ThemeStorageService;

  beforeEach(() => {
    themeStorageService = TestBed.inject(ThemeStorageService);

    TestBed.inject(LocalStorageService).clear();
  });

  it('should be created', () => {
    expect(themeStorageService).toBeTruthy();
  });

  it('#isDarkMode() should be false initially and true after #toggle()', () => {
    expect(themeStorageService.isDarkMode()).toBeFalse();

    themeStorageService.toggle();

    expect(themeStorageService.isDarkMode()).toBeTrue();
  });

  it('should call #localStorageService.setItem() once after #toggle()', () => {
    const localStorage = TestBed.inject(LocalStorageService);

    const localStorageSetItemFn = spyOn(localStorage, 'setItem');

    themeStorageService.toggle();

    expect(localStorageSetItemFn).toHaveBeenCalledTimes(1);
  });
});
