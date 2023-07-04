import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Profile } from '../models/profile.model';
import { map, delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private mockProfiles: Profile[] = [
    { id: 1, name: 'Alex', age: 28 },
    { id: 2, name: 'Andrei', age: 30 },
  ];

  constructor() {}

  public getProfiles(): Observable<Profile[]> {
    return of(this.mockProfiles).pipe(
      delay(1000)
    );
  }

  public addProfile(): Observable<Profile> {
    return of().pipe(
      delay(1000)
    );
  }

  public deleteProfile(): Observable<Profile> {
    return of().pipe(
      delay(1000)
    );
  }
}
