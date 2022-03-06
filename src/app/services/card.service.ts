import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CardService {
private apiUrl = ''
  constructor(private http:HttpClient) { }

getSortedData(inputCardsDeck: string){
          const url = '${apiUrl}/${inputCardsDeck}';
          return this.http.get<string>(this.apiUrl);
  }
}
