import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardService {
private apiUrl: string = 'http://fullstackprogramapi.azurewebsites.net/api/ImaginaryCards/GetSortedCards?inputCardsDeck='
  constructor(private http:HttpClient) { }

getSortedData(inputCardsDeck: string){
          const url = this.apiUrl.concat(inputCardsDeck);
          return this.http.get<string>(url);
  }
}
