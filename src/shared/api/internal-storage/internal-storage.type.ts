export type InternalStorage = Pick<Storage, 'getItem' | 'removeItem' | 'setItem'> & {
  getObjectItem: () => unknown | null;
};
