import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DynamicQuery } from '../models/dtos/dynamicQuery';
import { ListResponseModel } from '../models/dtos/listResponseModel';
import { PageRequest } from '../models/dtos/pageRequest';
import { ProgrammingTechnologyListDto } from '../models/dtos/programmingTechnologyListDto';
import { ProgrammingTechnology } from '../models/entity/programmingTechnology';


@Injectable({
  providedIn: 'root'
})
export class ProgrammingTechnologyService {

  constructor(
    @Inject('apiUrl') private apiUrl:string,
    private httpClient:HttpClient
  ) { }

  add(programmingTechnology:ProgrammingTechnology):Observable<ProgrammingTechnology>{
    let api = this.apiUrl + "ProgrammingTechnologies/Add";
    return this.httpClient.post<ProgrammingTechnology>(api,programmingTechnology);
  }
  
  update(programmingTechnology:ProgrammingTechnology):Observable<ProgrammingTechnology>{
    let api = this.apiUrl + "ProgrammingTechnologies/Update";
    return this.httpClient.post<ProgrammingTechnology>(api,programmingTechnology);
  }

  delete(id:number):Observable<ProgrammingTechnology>{
    let api = this.apiUrl + "ProgrammingTechnologies/Delete/"+id;
    return this.httpClient.get<ProgrammingTechnology>(api);
  }
  
  getById(id:number):Observable<ProgrammingTechnology>{
    let api = this.apiUrl + "ProgrammingTechnologies/GetById/" + id;
    return this.httpClient.get<ProgrammingTechnology>(api);
  }

  getList(pageRequest:PageRequest):Observable<ListResponseModel<ProgrammingTechnologyListDto>>{
    let api = this.apiUrl + "ProgrammingTechnologies/GetList?Page=" + pageRequest.page + "&PageSize=" + pageRequest.pageSize;
    return this.httpClient.get<ListResponseModel<ProgrammingTechnologyListDto>>(api);
  }

  getListByDynamic(pageRequest:PageRequest,dynamicQuery:DynamicQuery):Observable<ListResponseModel<ProgrammingTechnologyListDto>>{
    let api = 'http://localhost:5151/api/ProgrammingTechnologies/GetListByDynamicQuery?Page=0&PageSize=25'
    return this.httpClient.post<ListResponseModel<ProgrammingTechnologyListDto>>(api,dynamicQuery);
  }
}
