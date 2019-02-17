import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Profile } from './profile';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable({ providedIn: 'root' })

export class AppService {

  private profileUrl = "http://my-json-server.typicode.com/Oshada9319/JSON-Server-Faker/profiles";

  constructor(private http: HttpClient) { }

  /** GET profiles from the server */
  getProfile (name: String): Observable<Profile[]> {
    const url = `${this.profileUrl}/?name=${name}`;
    return this.http.get<Profile[]>(url)
      .pipe(
        tap(_ => this.log('fetched profile')),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /** POST: add a profile to the server */
  addProfile (profile: Profile): Observable<Profile> {
    return this.http.post<Profile>(`http://my-json-server.typicode.com/Oshada9319/JSON-Server-Faker/profiles`, profile, httpOptions).pipe(
      tap((newProfile: Profile) => this.log(`added profile w/ id=${newProfile.id}`)),
      catchError(this.handleError<Profile>('addProfile'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
