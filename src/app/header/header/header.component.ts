import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public searchInput: string = '';
  public ids = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  constructor(private router: Router) {}

  ngOnInit(): void {}


  searchId() {
    this.router.navigate(['users/user/' + this.searchInput]);
  }

  ngOnDestroy(): void {}
}
