import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {Profile} from "../../shared/models/profile.model";
import * as ProfileActions from '../../shared/redux/profile/profile.actions';
import * as ProfileSelectors from '../../shared/redux/profile/profile.selectors';
import {ProfileService} from "../../shared/services/profile.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  profiles$: Observable<Profile[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private store: Store) {}

  ngOnInit() {
    this.profiles$ = this.store.pipe(
      select(ProfileSelectors.selectAllProfiles),
      takeUntil(this.unsubscribe$)
    );
    this.loading$ = this.store.pipe(
      select(ProfileSelectors.selectProfileLoading),
      takeUntil(this.unsubscribe$)
    );
    this.error$ = this.store.pipe(
      select(ProfileSelectors.selectProfileError),
      takeUntil(this.unsubscribe$)
    );
    this.store.dispatch(ProfileActions.loadProfiles());
  }

  addNewItem() {
    const profileToAdd: Profile = { id: 100, name: 'Avogadro', age: 100}
    this.store.dispatch(ProfileActions.addProfile({ profile: profileToAdd }));
  }
  deleteItem() {
    let p: Profile = { id: 100, name: 'Avogadro', age: 100}
    this.store.dispatch(ProfileActions.deleteProfile({profile: p}));
  }
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
