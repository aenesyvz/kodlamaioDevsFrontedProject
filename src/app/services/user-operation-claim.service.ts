import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequest } from '../models/dtos/pageRequest';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { UserOperationClaim } from '../models/entity/userOperationClaim';

@Injectable({
  providedIn: 'root'
})
export class UserOperationClaimService {

  constructor(
    @Inject('apiUrl') private apiUrl : string,
    private httpClient : HttpClient
  ) { }

  add(userOperationClaim:UserOperationClaim):Observable<UserOperationClaim>{
    let api = this.apiUrl + "UserOperationClaims/Add";
    return this.httpClient.post<UserOperationClaim>(api,userOperationClaim);
  }

  update(userOperationClaim:UserOperationClaim):Observable<UserOperationClaim>{
    let api = this.apiUrl + "UserOperationClaims/Update";
    return this.httpClient.post<UserOperationClaim>(api,userOperationClaim);
  }

  delete(id:number):Observable<UserOperationClaim>{
    let api = this.apiUrl + "UserOperationClaims/Delete/" + id;
    return this.httpClient.get<UserOperationClaim>(api);
  }

  getById(userId:number):Observable<UserOperationClaim>{
    let api = this.apiUrl + "UserOperationClaims/GetById/"+ userId;
    return this.httpClient.get<UserOperationClaim>(api);
  }

  getList(pageRequest:PageRequest):Observable<ListResponseModel<UserOperationClaim>>{
    let api = this.apiUrl + "UserOperationClaims/GetList?Page=" + pageRequest + "&PageSize=" + pageRequest.pageSize;
    return this.httpClient.get<ListResponseModel<UserOperationClaim>>(api);
  }
}
