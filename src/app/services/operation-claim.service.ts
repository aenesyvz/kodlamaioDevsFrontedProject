import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { OperationClaim } from '../models/entity/operationClaim';


@Injectable({
  providedIn: 'root'
})
export class OperationClaimService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  add(operationClaim:OperationClaim):Observable<OperationClaim>{
    let api = this.apiUrl + "OperationClaims/Add";
    return this.httpClient.post<OperationClaim>(api,operationClaim);
  }

  update(operationClaim : OperationClaim):Observable<OperationClaim>{
    let api = this.apiUrl + "OperationClaims/Update";
    return this.httpClient.post<OperationClaim>(api,operationClaim);
  }

  delete(id:number):Observable<OperationClaim>{
    let api = this.apiUrl + "OperationClaims/Delete/"+id;
    return this.httpClient.get<OperationClaim>(api);
  }

  getById(id:number):Observable<OperationClaim>{
    let api = this.apiUrl + "OperationClaims/GetById/"+id;
    return this.httpClient.get<OperationClaim>(api);
  }

  getList():Observable<ListResponseModel<OperationClaim>>{
    let api = this.apiUrl + "OperationClaims/GetList";
    return this.httpClient.get<ListResponseModel<OperationClaim>>(api);
  }
}
