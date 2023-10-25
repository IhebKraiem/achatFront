import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/env';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  readonly API_URL = 'http://localhost:8089/SpringMVC/facture';

  private baseURL=environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  getAllFactures() {
    return this.httpClient.get(`${this.baseURL}:8083/SpringMVC/facture/retrieve-all-factures`)
  }
  addFacture(facture : any) {
    return this.httpClient.post(`${this.baseURL}:8083/SpringMVC/facture/add-facture`, facture)
  }
}
