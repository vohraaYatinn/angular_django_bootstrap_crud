import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly URL="http://127.0.0.1:8000/todo"
  constructor(private http:HttpClient) { }

  displayall():Observable<any>{
    return this.http.get<any>(this.URL+"/");
  }
 deleteit(id:any):Observable<any>{
    return this.http.delete<any>(this.URL+"/"+id);
  }
 addit(data:any):Observable<any>{
    return this.http.post<any>(this.URL+"/",data);
  }
//  deleteit(id:any):Observable<any>{
//     return this.http.delete<any>(this.URL+"/"+id);
//   }
fetchthis(id:any):Observable<any>{
  return this.http.get<any>(this.URL+"/"+id);
}
editthis(data:any):Observable<any>{
  return this.http.put<any>(this.URL+"/",data);
}

}
