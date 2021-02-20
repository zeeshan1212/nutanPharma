import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class MedicineService {
  public apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMedicines() {
    return this.http.get(`${this.apiUrl}api/c/medicine`);
  }
  postMedicine(payload){
    return this.http.post(`${this.apiUrl}api/c/medicine/create`, payload);
  }
  deleteMedicine(id){
    return this.http.delete(`${this.apiUrl}api/c/medicine/${id}`)
  }
}
