import { TestBed } from '@angular/core/testing';
import { InternalStorage, InternalStorageService } from '@shared/api';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    const internalStorage: InternalStorage = {
      getItem(key: string) {
        return key;
      },
      getObjectItem() {
        return;
      },
      setItem(key: unknown, value: unknown) {
        return { key, value };
      },
      removeItem(key: unknown) {
        return key;
      },
    };

    TestBed.configureTestingModule({
      providers: [
        {
          provide: InternalStorageService,
          useValue: internalStorage,
        },
        ThemeService,
      ],
    });

    themeService = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(themeService).toBeTruthy();
  });

  it('#theme() should be light initially and dark after #toggle()', () => {
    expect(themeService.theme()).toBe('light');

    themeService.toggle();

    expect(themeService.theme()).toBe('dark');
  });

  it('should call #InternalStorageService.setItem() once after #toggle()', () => {
    const internalStorageService = TestBed.inject(InternalStorageService);

    const internalStorageSetItemFn = spyOn(internalStorageService, 'setItem');

    themeService.toggle();

    expect(internalStorageSetItemFn).toHaveBeenCalledTimes(1);
  });
});
