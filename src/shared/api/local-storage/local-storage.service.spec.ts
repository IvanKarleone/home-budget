import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage.service';

const localStorageKey = 'test-key';

describe('LocalStorageService', () => {
  let localStorageService: LocalStorageService;

  beforeEach(() => {
    localStorageService = TestBed.inject(LocalStorageService);

    localStorageService.clear();
  });

  it('should be created', () => {
    expect(localStorageService).toBeTruthy();
  });

  it('should return null for empty storage', () => {
    const item = localStorageService.getItem(localStorageKey);

    expect(item).toBeNull();
  });

  it('should set item and them return it', () => {
    const item = 'item';
    localStorageService.setItem(item, localStorageKey);

    const storageItem = localStorageService.getItem(localStorageKey) ?? '';

    expect(item).toBe(storageItem);
  });

  it('should set object item and then return it', () => {
    const objectItem = { a: 1, b: 2 };
    localStorageService.setObjectItem(objectItem, localStorageKey);

    const storageObjectItem = localStorageService.getObjectItem(
      localStorageKey
    ) as typeof objectItem;

    expect(objectItem).toEqual(storageObjectItem);
  });

  it('should remove item', () => {
    localStorageService.setItem('item', localStorageKey);

    expect(localStorageService.getItem(localStorageKey)).not.toBeNull();

    localStorageService.removeItem(localStorageKey);

    expect(localStorageService.getItem(localStorageKey)).toBeNull();
  });
});
