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
  private readonly DATA_PATH = 'assets/data/';
  private readonly FILES: Record<string, string> = {
    septembre: 'marees_mareeinfo.json',
    octobre: 'marees_mareeinfo_octobre.json',
    novembre: 'marees_mareeinfo_novembre.json'
  };

  constructor(private http: HttpClient) {
  }

  getMareesForMonth(month: string): Observable<MareeDay[]> {
    const file = this.FILES[month] || this.FILES['septembre'];
    return this.http.get<MareeDay[]>(`${this.DATA_PATH}${file}`);
  }
}
