import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICommentsResponse } from '../models/comments.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {


  private API = "http://127.0.0.1:3000/api/features/"

  constructor(private http: HttpClient) { }

  getComments(feature_id: number): Observable<ICommentsResponse>{

    let api_backend = this.API + feature_id + '/comments'

    return this.http.get<ICommentsResponse>(api_backend)
  }

}
