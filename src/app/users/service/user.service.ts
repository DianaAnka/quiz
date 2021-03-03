import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

import { User } from './../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  cache: { [key: string]: any } = {};
  userCache: { [key: string]: any } = {};
  constructor(private http: HttpClient) {}

  load(pageNum: string): Observable<User[]> {
    if (pageNum == '') pageNum = '1';
    if (this.cache[pageNum]) {
      console.log('return cashed value');
      return of(this.cache[pageNum]);
    } else {
      this.cache[pageNum] = this.http
        .get<User[]>('https://reqres.in/api/users', {
          params: {
            page: pageNum,
          },
        })
        .pipe(
          tap((resolvedValue) => {
            this.cache[pageNum] = resolvedValue;
          })
        );
      return this.cache[pageNum];
    }
  }

  loadUser(userId: number): Observable<User> {
    if (this.userCache[userId]) {
      return of(this.userCache[userId]);
    } else {
      this.userCache[userId] = this.http
        .get<any>('https://reqres.in/api/users/' + userId)
        .pipe(tap((resolvedValue) => (this.userCache[userId] = resolvedValue)));
      return this.userCache[userId];
    }
  }

  search(searchQuery: string): Observable<User[]> {
    return this.load('').pipe(
      map((list: User[]) =>
        list.filter(
          (value) =>
            value.first_name.toLowerCase().indexOf(searchQuery.toLowerCase()) >
            -1
        )
      )
    );
  }
}
