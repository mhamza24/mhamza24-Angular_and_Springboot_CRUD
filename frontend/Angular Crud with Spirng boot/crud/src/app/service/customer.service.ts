import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL="http://localhost:8081/api/customer"
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

   postCustomer(customer:any):Observable<any>{
    return this.http.post(BASIC_URL+'/add',customer);
   }

   getAllCustomer():Observable<any>{
    return this.http.get(BASIC_URL+'/get_all');
   }

   getCustomerById(id:number):Observable<any>{
    return this.http.get(BASIC_URL+`/get_by_id/${id}`);
   }

   updateCustomer(id:number,customer:any):Observable<any>{
    return this.http.put(BASIC_URL+`/update/${id}`,customer);
  }

  deleteCustomer(id:number):Observable<any>{
    return this.http.delete(BASIC_URL+`/remove/${id}`);
  }
  
      
}
