import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent implements OnInit {
  user$: Observable<any> = new Observable<User>();
  userDate!: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    let id = this.route.snapshot.paramMap.get('id')!;
    this.user$ = this.userService.loadUser(+id);
    this.user$.subscribe();
  }
  back() {
    this.location.back();
  }
  ngOnInit(): void {}
}
