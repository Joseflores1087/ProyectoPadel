import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PredioService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:45001';

  GetPredio(){
    return this.http.get(`${this.url}/api/predio/GetPredio`);
  }

  GetPredioByid(id:any){
    console.log(id);
    
    return this.http.get(`${this.url}/api/predio/GetPredioById/${id}`);
  }

}
