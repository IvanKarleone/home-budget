type InternalStorage = Pick<Storage, 'getItem' | 'removeItem' | 'setItem'>;

export interface IInternalStorage extends InternalStorage {
  getBooleanItem(ket: string): boolean;
}
