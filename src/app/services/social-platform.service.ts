import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PageRequest } from '../models/dtos/pageRequest';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { SocialPlatform } from '../models/entity/socialPlatform';

@Injectable({
  providedIn: 'root'
})
export class SocialPlatformService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  add(socialPlatform:SocialPlatform):Observable<SocialPlatform>{
    let api = this.apiUrl + "SocialMediaPlatforms/Add";
    return this.httpClient.post<SocialPlatform>(api,socialPlatform);
  }

  update(socialPlatform:SocialPlatform):Observable<SocialPlatform>{
    let api = this.apiUrl + "SocialMediaPlatforms/Update";
    return this.httpClient.post<SocialPlatform>(api,socialPlatform);
  }

  delete(id:number):Observable<SocialPlatform>{
    let api = this.apiUrl + "SocialMediaPlatforms/Delete/" + id;
    return this.httpClient.get<SocialPlatform>(api);
  }

  getById(id:number):Observable<SocialPlatform>{
    let api = this.apiUrl + "SocialMediaPlatforms/GetById/" + id;
    return this.httpClient.get<SocialPlatform>(api);
  }

  getList(pageRequest:PageRequest):Observable<ListResponseModel<SocialPlatform>>{
    let api = this.apiUrl + "SocialMediaPlatforms/GetList?Page=" + pageRequest.page + "&PageSize=" + pageRequest.pageSize;
    return this.httpClient.get<ListResponseModel<SocialPlatform>>(api);
  }
}
