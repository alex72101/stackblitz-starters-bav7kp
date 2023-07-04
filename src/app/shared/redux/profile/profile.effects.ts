import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';
import { ProfileService } from '../../services/profile.service';
import * as ProfileActions from './profile.actions';
import { of } from 'rxjs';

@Injectable()
export class ProfileEffects {
  constructor(
    private actions$: Actions,
    private profileService: ProfileService
  ) {}

  loadProfiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProfileActions.loadProfiles),
      mergeMap(() =>
        this.profileService.getProfiles().pipe(
          map((profiles) => ProfileActions.loadProfilesSuccess({ profiles })),
          catchError((error) =>
            of(ProfileActions.loadProfilesFailure({ error }))
          )
        )
      )
    );
  });

  addProfile$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(ProfileActions.addProfile),
      switchMap(() =>
        this.profileService.addProfile().pipe(
          map((profile) => {
            return ProfileActions.addProfileSuccess({profile});
          })
        )
      )
    );
  });


  deleteProfile$ = createEffect( () => {
    return this.actions$.pipe(
      ofType(ProfileActions.deleteProfile),
      switchMap(() =>
        this.profileService.deleteProfile().pipe(
          map((profile) => {
            return ProfileActions.deleteProfileSuccess({profile});
          })
        )
      )
    );
  });


}
