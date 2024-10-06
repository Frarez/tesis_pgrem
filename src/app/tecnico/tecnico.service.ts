import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tecnico } from './tecnico';
  
@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  private apiURL = "http://localhost:3000";

  httpOptions = {

    headers: new HttpHeaders({

      'Content-Type': 'application/json'

    })

  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable <any>  {

    return this.httpClient.get(this.apiURL + '/tecnico/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(tecnico:Tecnico): Observable <any> {
    return this.httpClient.post(this.apiURL + '/tecnico/tecnico-create', JSON.stringify(tecnico), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  find(id_Tecnico:number): Observable <any> {
    return this.httpClient.get(this.apiURL + '/tecnico/' + id_Tecnico)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id_Tecnico:number, tecnico:Tecnico): Observable <any> {
    return this.httpClient.put(this.apiURL + '/tecnico/' + id_Tecnico, JSON.stringify(tecnico), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id_Tecnico:number){
    return this.httpClient.delete(this.apiURL + '/tecnico/' + id_Tecnico, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }


  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
