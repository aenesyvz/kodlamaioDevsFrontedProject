import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/models/dtos/pageRequest';
import { SocialPlatformListDto } from 'src/app/models/dtos/socialPlatformListDto';
import { SocialPlatform } from 'src/app/models/entity/socialPlatform';
import { SocialPlatformService } from 'src/app/services/social-platform.service';

@Component({
  selector: 'app-socail-platform',
  templateUrl: './socail-platform.component.html',
  styleUrls: ['./socail-platform.component.css']
})
export class SocailPlatformComponent implements OnInit {
  socialPlatforms:SocialPlatformListDto[] = [];
  socialPlatform: SocialPlatform;

  addForm:FormGroup;
  updateForm:FormGroup;

  id:number;
  name:string;
  domainAddress:string;

  pageRequest:PageRequest = {page:0,pageSize:25};

  
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
    private socialPlatformService:SocialPlatformService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.createAddForm();
    this.createUpdateForm();
  }

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required),
      domainAddress:new FormControl("",Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let socialPlatformModel = Object.assign({},this.addForm.value);
      
      this.socialPlatformService.add(socialPlatformModel).subscribe((res) =>{
         this.getList();
         this.createAddForm();
         document.getElementById("closeModal").click();
       });
    }else{

    }
  }

  createUpdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      name:new FormControl("",Validators.required),
      domainAddress:new FormControl("",Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let socialPlatformModel = Object.assign({},this.updateForm.value);
      this.socialPlatformService.add(socialPlatformModel).subscribe((res) =>{
        this.getList();
        this.createUpdateForm();
        document.getElementById("closeUpdateModal").click();
      });
    }else{
      
    }
  }

  delete(id:number){
    this.socialPlatformService.delete(id).subscribe((res) => {
      this.getList();
    });
  }

  getById(id:number){
    this.socialPlatformService.getById(id).subscribe((res) => {
      this.socialPlatform = res;

      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["name"].setValue(res.name);
      this.updateForm.controls["domainAddress"].setValue(res.domainAddress);
    });
  }

  getList(){
    this.socialPlatformService.getList(this.pageRequest).subscribe((res) =>{
      this.socialPlatforms = res.items;
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


  clickDeleteBtn(item:SocialPlatform){
    this.socialPlatform = item;
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
