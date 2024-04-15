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

    let apiEndpoint = this.API + feature_id + '/comments'

    return this.http.get<ICommentsResponse>(apiEndpoint)
  }

  saveComment(feature_id: number, comment: string): Promise<any> {
    const apiEndpoint = `${this.API}/comments/save`;
    const payload = { comment: comment, feature_id: feature_id };

    return new Promise((resolve, reject) => {
      this.http.post(apiEndpoint, payload).subscribe(
        response => {
          resolve(response); // Resolvemos la promesa con la respuesta del backend
        },
        error => {
          reject(error); // Rechazamos la promesa con el error
        }
      );
    });
  }

}
