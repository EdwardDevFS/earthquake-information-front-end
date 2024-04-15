import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponse } from '../models/features.interface';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  private API = "http://127.0.0.1:3000/api/features/earthquakes"
  constructor(private http: HttpClient) { }

  getFeatures(page: number = 1, perPage: number = 10, magTypes: string[] = [], search: string = ''): Observable<IResponse>{
    page = page + 1
    let params = new HttpParams();
    params = params.append('per_page', perPage);
    params = params.append('page', page);
    params = params.append('mag_types', JSON.stringify(magTypes))
    params = params.append('search', search)
    return this.http.get<IResponse>(this.API, { params: params })
  }
}
