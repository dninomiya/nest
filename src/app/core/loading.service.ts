import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  pageLoadingSource = new BehaviorSubject<boolean>(false);
  isPageLoading$ = this.pageLoadingSource.asObservable();

  constructor() { }
}
