import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../users/models/user';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
    initialState: User = {
        id: 0,
      name: "",
      price: "",
      image: 0
     };

  private inventorySubject$ = new BehaviorSubject<User>(this.initialState);
  inventoryChanged$ = this.inventorySubject$.asObservable();

  constructor() { }

  addToInventory(user: User) {
    this.inventorySubject$.next(user);
  }
}
