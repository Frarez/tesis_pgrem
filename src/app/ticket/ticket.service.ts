import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiURL = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'

    })

  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable <any>  {

    return this.httpClient.get(this.apiURL + '/ticket/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  create(ticket:Ticket): Observable <any> {
    return this.httpClient.post(this.apiURL + '/ticket/ticket-create', JSON.stringify(ticket), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  find(id_Ticket:number): Observable <any> {
    return this.httpClient.get(this.apiURL + '/ticket/' + id_Ticket)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id_Ticket:number, ticket:Ticket): Observable <any> {
    return this.httpClient.put(this.apiURL + '/ticket_update/' + id_Ticket, JSON.stringify(ticket), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  delete(id_Ticket:number){
    return this.httpClient.delete(this.apiURL + '/ticket/' + id_Ticket, this.httpOptions)
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

