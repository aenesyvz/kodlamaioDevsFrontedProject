import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicQuery } from '../models/dtos/dynamicQuery';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { PageRequest } from '../models/dtos/pageRequest';
import { UserSocialMediaAccount } from '../models/entity/userSocialMediaAccount';

@Injectable({
  providedIn: 'root'
})
export class UserSocialMediaAccountService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  add(userSocialMediaAccount:UserSocialMediaAccount):Observable<UserSocialMediaAccount>{
    let api = this.apiUrl + "UserProfileSocialMediaAccounts/Add";
    return this.httpClient.post<UserSocialMediaAccount>(api,userSocialMediaAccount);
  }

  update(userSocialMediaAccount:UserSocialMediaAccount):Observable<UserSocialMediaAccount>{
    let api = this.apiUrl + "UserProfileSocialMediaAccounts/Update";
    return this.httpClient.post<UserSocialMediaAccount>(api,userSocialMediaAccount);
  }

  delete(id:number):Observable<UserSocialMediaAccount>{
    let api = this.apiUrl + "UserProfileSocialMediaAccounts/Delete/" + id;
    return this.httpClient.get<UserSocialMediaAccount>(api);
  }

  getListByDynamicQuery(pageRequest:PageRequest,dynamicQuery:DynamicQuery):Observable<ListResponseModel<UserSocialMediaAccount>>{
    let api = this.apiUrl + "UserProfileSocialMediaAccounts/GetListByDynamicQuery?Page=" + pageRequest.page + "&PageSize=" + pageRequest.pageSize;
    return this.httpClient.post<ListResponseModel<UserSocialMediaAccount>>(api,dynamicQuery);
  }
}
