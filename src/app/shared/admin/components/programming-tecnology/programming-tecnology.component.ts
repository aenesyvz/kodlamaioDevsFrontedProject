import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DynamicQuery } from 'src/app/models/dtos/dynamicQuery';
import { PageRequest } from 'src/app/models/dtos/pageRequest';
import { ProgrammingTechnologyListDto } from 'src/app/models/dtos/programmingTechnologyListDto';
import { ProgrammLanguage } from 'src/app/models/entity/programmingLanguage';
import { ProgrammingTechnology } from 'src/app/models/entity/programmingTechnology';
import { ProgrammingLanguageService } from 'src/app/services/programming-language.service';
import { ProgrammingTechnologyService } from 'src/app/services/programming-technology.service';

@Component({
  selector: 'app-programming-tecnology',
  templateUrl: './programming-tecnology.component.html',
  styleUrls: ['./programming-tecnology.component.css']
})
export class ProgrammingTecnologyComponent implements OnInit {

  programmingTechnologies:ProgrammingTechnologyListDto[] = [];
  programmingTechnology:ProgrammingTechnology;
  programmingTechnologyDto:ProgrammingTechnologyListDto;

  programmingLanguages:ProgrammLanguage[] = [];
  programmingLanguage:ProgrammLanguage;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  programmingLanguageId:number;
  name:string;


  filterText:string = "";
  pageRequestTech:PageRequest = {page:0,pageSize:25};
  pageRequest:PageRequest = {page:0,pageSize:25};

  dynamicQuery:DynamicQuery;


  
  @ViewChild("formcontainer",{read:ElementRef}) formContainer : ElementRef;

  @ViewChild("btnAdd",{read:ElementRef}) addBtn:ElementRef;
  @ViewChild("addModal",{read:ElementRef}) addModal : ElementRef;
  @ViewChild("modalAddActionBtn",{read:ElementRef}) modalAddActionBtn:ElementRef;
  @ViewChild("addXBtn",{read:ElementRef}) addXBtn:ElementRef;
  @ViewChild("addCloseBtn",{read:ElementRef}) addCloseBtn:ElementRef;

  @ViewChild("btnupdate",{read:ElementRef}) updateBtn :ElementRef;
  @ViewChild("updateModal",{read:ElementRef}) updateModal : ElementRef;
  @ViewChild("modalUpdateActionBtn",{read:ElementRef}) modalUpdateActionBtn:ElementRef;
  @ViewChild("updateXBtn",{read:ElementRef}) updateXBtn:ElementRef;
  @ViewChild("updateCloseBtn",{read:ElementRef}) deleteCloseBtn:ElementRef;

  @ViewChild("deleteModal",{read:ElementRef}) deleteModal : ElementRef;
  @ViewChild("modalDeleteAction",{read:ElementRef}) modalDeleteAction:ElementRef;
  @ViewChild("deleteXBtn",{read:ElementRef}) deleteXBtn:ElementRef;
  @ViewChild("deleteCloseBtn",{read:ElementRef}) deleteClose:ElementRef;

  constructor(
    private programmingTechnologyService:ProgrammingTechnologyService,
    private programmingLanguageService:ProgrammingLanguageService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["programmingLanguageId"]){
        this.programmingLanguageId = +params["programmingLanguageId"];
        this.dynamicQuery =
        {
          "sort": [
            {
              "field": "name",
              "dir": "asc"
            }
          ],
          "filter": {
            "field": "programmingLanguageId",
            "operator": "eq",
            "value": this.programmingLanguageId.toString(),
            "logic": "or",
            "filters": [
              
            ]
          }
        }

        console.log("HOOOOOOOOOOOOOOOOOOOOP");
        
      }else{
        console.log("sdjsföasdfs");
        
      }
      console.log(this.dynamicQuery);
      
      this.getListByDynamicQuery();
      this.getListProgrammingLanguage();
      this.createAddForm();
      this.createUpdateForm();
    })
  }

  createAddForm(){
    this.addForm = new FormGroup({
      programmingLanguageId:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required),
    });
  }

  add(){
    if(this.addForm.valid){
      let programmingTechnologyModel = Object.assign({},this.addForm.value);
      
      this.programmingTechnologyService.add(programmingTechnologyModel).subscribe((res) => {
        this.getList();
        this.createAddForm();
        document.getElementById("closeModal").click();
      });
    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      programmingLanguageId:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let programmingTechnologyModel = Object.assign({},this.updateForm.value);
      console.log("Update => " + JSON.stringify(programmingTechnologyModel));
      
      this.programmingTechnologyService.update(programmingTechnologyModel).subscribe((res) => {
        this.getList();
        this.createUpdateForm();
        document.getElementById("closeUpdateModal").click();
      });
    }
  }

  delete(id:number){
    this.programmingTechnologyService.delete(id).subscribe((res) =>{
      this.getList();
    });
  }

  getList() {
    this.programmingTechnologyService.getList(this.pageRequestTech).subscribe((res) => {
      this.programmingTechnologies = res.items;
    });
  }

  getListByDynamicQuery(){
    this.programmingTechnologyService.getListByDynamic(this.pageRequestTech,this.dynamicQuery).subscribe((res) => {
      this.programmingTechnologies = res.items;
    });
  }

  getById(id:number){
    console.log("ÇALIŞIŞIYORUM Kİs");
    
    this.programmingTechnologyService.getById(id).subscribe((res) => {
      console.log("GetByID"+JSON.stringify(res));
      
      this.programmingTechnology = res;

      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
      this.updateForm.controls["programmingLanguageId"].setValue(res.programmingLanguageId);
    });
  }

  getListProgrammingLanguage(){
    this.programmingLanguageService.getList(this.pageRequest).subscribe((res) => {
      this.programmingLanguages = res.items;
    });
  }
  
  changeInputClass(text: string) {
    if (text != "") {
      return "input-group input-group-outline is-valid my-3"
    } else {
      return "input-group input-group-outline is-invalid my-3"
    }
  }

  clickAddBtn(){
    this.formContainer.nativeElement.classList.add("display");
    this.addModal.nativeElement.classList.add("display");
  }

  clickAddXButton(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }

  clickAddCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }

  clickmodalAddActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }

  clickUpdateBtn(id:number){
    this.getById(id);
    this.formContainer.nativeElement.classList.add("display");
    this.updateModal.nativeElement.classList.add("display");
  }

  clickUpdateXBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }

  clickUpdateCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }

  clickmodalUpdateActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }


  clickDeleteBtn(item:ProgrammingTechnologyListDto){
    this.programmingTechnologyDto = item;
    this.formContainer.nativeElement.classList.add("display");
    this.deleteModal.nativeElement.classList.add("display");
  }

  clickDeleteXBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }

  clickDeleteCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }

  clickmodalDeleteActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }
}
