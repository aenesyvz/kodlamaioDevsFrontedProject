import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequest } from '../models/dtos/pageRequest';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { UserProfile } from '../models/entity/userProfile';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }
  
  add(userProfile:UserProfile):Observable<UserProfile>{
    let api = this.apiUrl + "UserProfiles/Add";
    return this.httpClient.post<UserProfile>(api,userProfile);
  }

  update(userProfile:UserProfile):Observable<UserProfile>{
    let api = this.apiUrl + "UserProfiles/Update";
    return this.httpClient.post<UserProfile>(api,userProfile);
  }

  delete(id:number):Observable<UserProfile>{
    let api = this.apiUrl + "UserProfiles/Delete/"+id;
    return this.httpClient.get<UserProfile>(api);
  }

  getById(id:number):Observable<UserProfile>{
    let api = this.apiUrl + "UserProfiles/GetById/"+id;
    return this.httpClient.get<UserProfile>(api);
  }

  getList(pageRequest:PageRequest):Observable<ListResponseModel<UserProfile>>{
    let api = this.apiUrl + "UserProfiles/GetList?Page=" + pageRequest.page + "&PageSize=" + pageRequest.pageSize;
    return this.httpClient.get<ListResponseModel<UserProfile>>(api);
  }
}
