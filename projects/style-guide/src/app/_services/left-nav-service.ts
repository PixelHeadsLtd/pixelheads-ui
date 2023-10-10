import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class OpenLeftNavService {
  [x: string]: any;

  updateIndex = new Subject<number>();

  constructor() { }

}