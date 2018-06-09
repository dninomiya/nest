import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService, User } from '../../core/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nest-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  displayedColumns = ['ID', 'タイプ', 'ランク', '最終更新日'];
  dataSource = new MatTableDataSource();
  subscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private userService: UserService) {
    this.subscription = this.userService.getUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sortingDataAccessor = (item: User, property) => {
      switch (property) {
        case '最終更新日': return new Date(item.lastUpdate);
        default: return item[property];
      }
    };
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
