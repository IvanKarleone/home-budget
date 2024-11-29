type InternalStorage = Pick<Storage, 'getItem' | 'removeItem' | 'setItem' | 'clear'> & {
  getObjectItem: (key: string) => unknown | null;
  setObjectItem: (item: object, key: string) => void;
};

export class InternalStorageService implements InternalStorage {
  protected readonly storage: Storage;

  private readonly keyPrefix = 'home-budget';

  constructor(storage: Storage) {
    this.storage = storage;
  }

  getItem(key: string): string | null {
    return this.storage.getItem(this.getKey(key));
  }

  getObjectItem<T>(key: string): T | null {
    const objectItem = this.storage.getItem(this.getKey(key));

    return objectItem ? (JSON.parse(objectItem) as T) : null;
  }

  setItem(item: number | string | boolean, key: string): void {
    this.storage.setItem(this.getKey(key), `${item}`);
  }

  setObjectItem(item: object, key: string): void {
    const jsonItem = JSON.stringify(item);

    this.storage.setItem(this.getKey(key), jsonItem);
  }

  removeItem(key: string): void {
    this.storage.removeItem(this.getKey(key));
  }

  clear(): void {
    this.storage.clear();
  }

  private getKey(key: string): string {
    return `${this.keyPrefix}-${key}`;
  }
}
