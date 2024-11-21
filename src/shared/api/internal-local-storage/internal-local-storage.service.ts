import { Injectable } from '@angular/core';
import { InternalStorageService } from '../internal-storage/internal-storage.service';

@Injectable()
export class InternalLocalStorageService extends InternalStorageService {
  protected override readonly storage = localStorage;
}
