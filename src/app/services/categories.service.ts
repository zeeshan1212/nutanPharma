import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(`${this.apiUrl}api/c/categories`);
  }

  deleteCategory(id) {
    return this.http.delete(`${this.apiUrl}api/c/categories/${id}`);
  }
  postCategory(payload){
    return this.http.post(`${this.apiUrl}api/c/categories/create`, payload);
  }
}
