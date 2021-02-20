import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class BrandService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  getBrands(){
    return this.http.get(`${this.apiUrl}api/c/brands`);
  }

  deleteBrand(id) {
    return this.http.delete(`${this.apiUrl}api/c/brands/${id}`);
  }
  postBrand(payload){
    return this.http.post(`${this.apiUrl}api/c/brands/create`, payload);
  }
}
