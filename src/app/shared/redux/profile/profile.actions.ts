import { createAction, props } from '@ngrx/store';
import { Profile } from '../../models/profile.model';

export const loadProfiles = createAction('[Profile] Load Profiles');


export const loadProfilesSuccess = createAction(
  '[Profile] Load Profiles Success',
  props<{ profiles: Profile[] }>()
);

export const loadProfilesFailure = createAction(
  '[Profile] Load Profiles Failure',
  props<{ error: any }>()
);

export const addProfile = createAction(
  '[Profile] Add Profile',
  props<{ profile: Profile }>()
  )

export const addProfileSuccess = createAction(
  '[Profile] Add Profiles Success',
  props<{ profile: Profile }>()
);

export const deleteProfile = createAction(
  '[Profile] Delete profile',
  props<{ profile: Profile }>()
);

export const deleteProfileSuccess = createAction(
  '[Profile] Delete profile success',
  props<{ profile: Profile }>()
);
