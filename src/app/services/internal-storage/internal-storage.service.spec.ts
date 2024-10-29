import { TestBed } from '@angular/core/testing';

import { InternalStorageService } from './internal-storage.service';
import { INTERNAL_STORAGE_SETTINGS } from '../../tokens/internal-storage-settings.token';
import { createInternalStorageSettings } from '../../utils/create-internal-storage-settings';

describe('InternalStorageService', () => {
  let internalStorageService: InternalStorageService;
  let internalStorageInstance = localStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: INTERNAL_STORAGE_SETTINGS,
          useValue: createInternalStorageSettings({
            instance: internalStorageInstance,
            key: 'test-key',
          }),
        },
      ],
    });

    internalStorageService = TestBed.inject(InternalStorageService);

    internalStorageInstance.clear();
  });

  it('should be created', () => {
    expect(internalStorageService).toBeTruthy();
  });

  it('should return null', () => {
    const item = internalStorageService.getItem();

    expect(item).toBeNull();
  });

  it('should return boolean item', () => {
    const booleanItem = true;
    internalStorageService.setItem(booleanItem);

    const booleanStorageItem = internalStorageService.getBooleanItem();

    expect(booleanItem).toBe(booleanStorageItem);
  });

  it('should return item', () => {
    const item = 'item';
    internalStorageService.setItem(item);

    const storageItem = internalStorageService.getItem() ?? '';

    expect(item).toBe(storageItem);
  });

  it('should remove item', () => {
    internalStorageService.setItem('item');

    expect(internalStorageService.getItem()).not.toBeNull();

    internalStorageService.removeItem();

    expect(internalStorageService.getItem()).toBeNull();
  });
});
