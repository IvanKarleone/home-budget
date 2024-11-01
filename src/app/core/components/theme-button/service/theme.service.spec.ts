import { TestBed } from '@angular/core/testing';
import { TInternalStorage } from '../../../models/internal-storage.type';
import { ThemeService } from './theme.service';
import { InternalStorageService } from '../../../services/internal-storage/internal-storage.service';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    const internalStorage: TInternalStorage = {
      getItem(key: string) {
        return key;
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
