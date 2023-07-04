import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.reducer';

export const selectProfileState =
  createFeatureSelector<ProfileState>('profile');

export const selectAllProfiles = createSelector(
  selectProfileState,
  (state: ProfileState) => state.profiles
);

export const selectProfileLoading = createSelector(
  selectProfileState,
  (state: ProfileState) => state.loading
);

export const selectProfileError = createSelector(
  selectProfileState,
  (state: ProfileState) => state.error
);
