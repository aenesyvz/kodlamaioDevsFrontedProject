import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/models/dtos/pageRequest';
import { ProgrammLanguage } from 'src/app/models/entity/programmingLanguage';
import { ProgrammingLanguageService } from 'src/app/services/programming-language.service';

@Component({
  selector: 'app-programming-lnaguage',
  templateUrl: './programming-lnaguage.component.html',
  styleUrls: ['./programming-lnaguage.component.css']
})
export class ProgrammingLnaguageComponent implements OnInit {

  programmingLanguages:ProgrammLanguage[];
  programmingLanguage:ProgrammLanguage;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;

  filterText:string = "";
  pageRequest:PageRequest = {page:0,pageSize:10};


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
   private programmingLanguageService:ProgrammingLanguageService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.createAddForm();
    this.createUpdateForm();
  }
  
  
  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required),
    });
  }

  add(){
    if(this.addForm.valid){
      let programmingLanguageModel = Object.assign({},this.addForm.value);
      console.log(programmingLanguageModel);
      
      this.programmingLanguageService.add(programmingLanguageModel).subscribe((res) => {
        this.getList();
        this.createAddForm();
        document.getElementById("closeModal").click();
      },(err) => {
        console.log(err);
        
      });
    }else{

    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let programmingLanguageModel = Object.assign({},this.updateForm.value);
      this.programmingLanguageService.update(programmingLanguageModel).subscribe((res) => {
        this.getList();
        this.createAddForm();
        document.getElementById("closeUpdateModal").click();
      },(err) => {

      });
    }else{

    }
  }

  delete(id:number){
    this.programmingLanguageService.delete(id).subscribe((res) => {});
  }

  getById(id:number){
    this.programmingLanguageService.getById(id).subscribe((res) => {
      this.programmingLanguage = res;

      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
      console.log(res.id);
      
    },(err) => {

    });
  }

  getList(){
    this.programmingLanguageService.getList(this.pageRequest).subscribe((res) => {
      this.programmingLanguages = res.items;
    });
  }

  changePageRequest(page:number,pageSize:number){
    this.pageRequest = {page:page,pageSize:pageSize};
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


  clickDeleteBtn(item:ProgrammLanguage){
    this.programmingLanguage = item;
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
