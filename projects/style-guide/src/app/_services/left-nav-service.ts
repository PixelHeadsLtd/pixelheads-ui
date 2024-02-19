import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenLeftNavService {
  [x: string]: any;

  updateIndex = new Subject<number>();

  constructor() { }

}
