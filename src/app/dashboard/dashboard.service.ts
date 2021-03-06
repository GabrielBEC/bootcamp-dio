import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Stock from '../models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  readonly baseUrl = 'https://gb-bootcamp-santander.herokuapp.com/bootcamp'

  constructor(private http: HttpClient) { }

  async getStocks(): Promise<Stock[]>{
    return this.http.get<Stock[]>(`${this.baseUrl}/stock`).toPromise();
  }
}
