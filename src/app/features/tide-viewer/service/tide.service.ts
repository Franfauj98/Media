import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Tide {
  time: string;
  height: string;
  type: string;
}

export interface MareeDay {
  date: string;
  tides: Tide[];
}

@Injectable({providedIn: 'root'})
export class TideService {
  private url = 'assets/data/marees_mareeinfo.json';

  constructor(private http: HttpClient) {
  }

  getMarees(): Observable<MareeDay[]> {
    return this.http.get<MareeDay[]>(this.url);
  }
}

