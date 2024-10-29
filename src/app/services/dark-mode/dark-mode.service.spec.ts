import { TestBed } from '@angular/core/testing';

import { DarkModeService } from './dark-mode.service';
import { InternalStorageService } from '../internal-storage/internal-storage.service';
import { IInternalStorage } from '../../models/internal-storage.model';

describe('DarkModeService', () => {
  let darkModeService: DarkModeService;

  beforeEach(() => {
    const internalStorage: IInternalStorage = {
      getItem(key: string) {
        return key;
      },
      getBooleanItem(key: string) {
        return false;
      },
      setItem(key, value) {},
      removeItem(key) {},
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: InternalStorageService,
          useValue: internalStorage,
        },
        DarkModeService,
      ],
    });

    darkModeService = TestBed.inject(DarkModeService);
  });

  it('should be created', () => {
    expect(darkModeService).toBeTruthy();
  });

  it('#isOnDarkMode() should be false initially and true after #toggle()', () => {
    expect(darkModeService.isOnDarkMode()).toBeFalse();

    darkModeService.toggle();

    expect(darkModeService.isOnDarkMode()).toBeTrue();
  });

  it('should call #InternalStorageService.setItem() once after #toggle()', () => {
    const internalStorageService = TestBed.inject(InternalStorageService);

    const internalStorageSetItemFn = spyOn(internalStorageService, 'setItem');

    darkModeService.toggle();

    expect(internalStorageSetItemFn).toHaveBeenCalledTimes(1);
  });
});
