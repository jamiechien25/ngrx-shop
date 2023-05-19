import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { products } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http: HttpClient) { }

  getPosts() {
    // this._http.get('http://localhost:3000/toDo').subscribe(x=>{console.log(x)})
    return this._http.get<products>('http://localhost:3000/loadproduct');
  }
}
