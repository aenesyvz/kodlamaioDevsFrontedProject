import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicQuery } from '../models/dtos/dynamicQuery';
import { PageRequest } from '../models/dtos/pageRequest';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { ProgrammLanguage } from '../models/entity/programmingLanguage';


@Injectable({
  providedIn: 'root'
})
export class ProgrammingLanguageService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient) { }

  add(programmingLanguage:ProgrammLanguage):Observable<ProgrammLanguage>{
    console.log("add() => " + programmingLanguage);
    
    let api = this.apiUrl + "ProgramLanguages/Add";
    return this.httpClient.post<ProgrammLanguage>(api,programmingLanguage);
  }

  update(programmingLanguage:ProgrammLanguage):Observable<ProgrammLanguage>{
    let api = this.apiUrl + "ProgramLanguages/Update";
    return this.httpClient.post<ProgrammLanguage>(api,programmingLanguage);
  }

  delete(id:number):Observable<ProgrammLanguage>{
    let api = this.apiUrl + "ProgramLanguages/Delete/" + id;
    return this.httpClient.get<ProgrammLanguage>(api);
  }

  getById(id:number):Observable<ProgrammLanguage>{
    let api = this.apiUrl + "ProgramLanguages/GetById/" + id;
    return this.httpClient.get<ProgrammLanguage>(api);
  }

  getList(pageRequest:PageRequest):Observable<ListResponseModel<ProgrammLanguage>>{
    let api = this.apiUrl + "ProgramLanguages/GetList?Page="+ pageRequest.page +"&PageSize=" + pageRequest.pageSize;
    return this.httpClient.get<ListResponseModel<ProgrammLanguage>>(api);
  }

  getListNoPaging():Observable<ListResponseModel<ProgrammLanguage>>{
    let api = this.apiUrl + "ProgramLanguage/GetListNoPaging";
    return this.httpClient.get<ListResponseModel<ProgrammLanguage>>(api);
  }
}
