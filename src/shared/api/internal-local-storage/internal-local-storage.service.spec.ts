import { TestBed } from '@angular/core/testing';

import { INTERNAL_STORAGE_KEY } from '../internal-storage/internal-storage-key.token';
import { InternalLocalStorageService } from './internal-local-storage.service';

describe('internalLocalStorageService', () => {
  let internalLocalStorageService: InternalLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InternalLocalStorageService,
        {
          provide: INTERNAL_STORAGE_KEY,
          useValue: 'test-key',
        },
      ],
    });

    internalLocalStorageService = TestBed.inject(InternalLocalStorageService);

    internalLocalStorageService.removeItem();
  });

  it('should be created', () => {
    expect(internalLocalStorageService).toBeTruthy();
  });

  it('should return null', () => {
    const item = internalLocalStorageService.getItem();

    expect(item).toBeNull();
  });

  it('should return item', () => {
    const item = 'item';
    internalLocalStorageService.setItem(item);

    const storageItem = internalLocalStorageService.getItem() ?? '';

    expect(item).toBe(storageItem);
  });

  it('should remove item', () => {
    internalLocalStorageService.setItem('item');

    expect(internalLocalStorageService.getItem()).not.toBeNull();

    internalLocalStorageService.removeItem();

    expect(internalLocalStorageService.getItem()).toBeNull();
  });
});
