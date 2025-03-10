import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private colorSource = new BehaviorSubject<string>('');
  currentColor = this.colorSource.asObservable();

  constructor() { }

  changeColor(color: string) {
    this.colorSource.next(color);
  }
}
