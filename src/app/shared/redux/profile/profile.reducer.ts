import { createReducer, on } from '@ngrx/store';
import { Profile } from '../../models/profile.model';
import * as ProfileActions from './profile.actions';

export interface ProfileState {
  profiles: Profile[];
  loading: boolean;
  error: string;
}

export const initialState: ProfileState = {
  profiles: [],
  loading: false,
  error: '',
};

export const profileReducer = createReducer(
  initialState,
  on(ProfileActions.loadProfilesSuccess, (state, action) => {
    return { ...state, profiles: action.profiles };
  }),
  on(ProfileActions.loadProfilesFailure, (state, action) => {
    return { ...state, error: action.error };
  }),
  on(ProfileActions.addProfile, (state, action) => {
    return{
      ...state,
      profiles: [...state.profiles, action.profile],
      loading: true
    };
  }),
  on(ProfileActions.addProfileSuccess, (state) => {
    return { ...state , loading: false};
  }),
  on(ProfileActions.deleteProfile, (state) => {
    return {
      ...state,
      loading: true,
      profiles: state.profiles.slice(0, -1)
    };
  }),
  on(ProfileActions.deleteProfileSuccess, (state) => {
    return {
      ...state,
      loading: false,
    };
  }),

);
