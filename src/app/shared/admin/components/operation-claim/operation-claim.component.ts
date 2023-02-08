import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { OperationClaim } from 'src/app/models/entity/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import "../../../../../assets/js/admin/operationClaim.js";
@Component({
  selector: 'app-operation-claim',
  templateUrl: './operation-claim.component.html',
  styleUrls: ['./operation-claim.component.css'],
})
export class OperationClaimComponent implements OnInit {

  id:number;
  name:string;

  addForm:FormGroup;
  updateForm:FormGroup;

  operationClaim:OperationClaim;
  operationClaims:OperationClaim[] = [];

  filterText:string = "";

  @ViewChild("btnadd",{read:ElementRef}) addBtn :ElementRef;
  @ViewChild("btnupdate",{read:ElementRef}) updateBtn :ElementRef;


  @ViewChild("formcontainer",{read:ElementRef}) formContainer:ElementRef;
  @ViewChild("modalAddActionBtn",{read:ElementRef}) modalAddActionBtn :ElementRef
  @ViewChild("modalUpdateActionBtn",{read:ElementRef}) modalUpdateActionBtn :ElementRef;
  @ViewChild("modalDeleteActionBtn",{read:ElementRef}) modalDeleteActionBtn:ElementRef;

  @ViewChild("addModal",{read:ElementRef}) addModal :ElementRef;
  @ViewChild("updateModal",{read:ElementRef}) updateModal :ElementRef;
  @ViewChild("deleteModal",{read:ElementRef}) deleteModal:ElementRef;

  @ViewChild("addCloseBtn",{read:ElementRef}) addCloseBtn :ElementRef;
  @ViewChild("addXBtn",{read:ElementRef}) addXBtn :ElementRef;
  @ViewChild("updateCloseBtn",{read:ElementRef}) updateCloseBtn :ElementRef;
  @ViewChild("updateXBtn",{read:ElementRef}) updateXBtn :ElementRef;
  @ViewChild("deleteCloseBtn",{read:ElementRef}) deleteClose:ElementRef;
  @ViewChild("deleteXButton",{read:ElementRef}) deleteXBtn:ElementRef;
  
  constructor(
    private operatioClaimService:OperationClaimService
  ) { }

  ngOnInit(): void {
    this.getList();
    this.createAddForm();
    this.createUpdateForm();
  }

  //Add Operation

  createAddForm(){
    this.addForm = new FormGroup({
      name:new FormControl("",Validators.required),
    });
  }

  add(){
    if(this.addForm.valid){
       let operationClaimModel = Object.assign({},this.addForm.value);
       console.log(JSON.stringify(operationClaimModel));
       
      this.operatioClaimService.add(operationClaimModel).subscribe((res) => {
        this.getList();
      });
    }
  }


  //Update Operation 

  createUpdateForm(){
    this.updateForm = new FormGroup({
       id: new FormControl(0,Validators.required),
       name:new FormControl("",Validators.required),
    });
  }

  loadUpdateForm(item:OperationClaim){
    this.updateForm.controls["id"].setValue(item.id);
    this.updateForm.controls["name"].setValue(item.name);
  }

  update(){
    if(this.updateForm.valid){
      let operationClaimModel = Object.assign({},this.updateForm.value);

      this.operatioClaimService.update(operationClaimModel).subscribe((res) => {
        this.getList();
      });
    }
  }

  //Other Operations

  delete(id:number){
    this.operatioClaimService.delete(id).subscribe((res) => {
      this.getList();
    });
  }

  getById(id:number){
    console.log("adfsafsf");
    
    this.operatioClaimService.getById(id).subscribe((res) => {
      this.operationClaim = res;
      
      // this.updateForm.controls["id"].setValue(res.id);
      // this.updateForm.controls["name"].setValue(res.name);
    });
  }

  getList(){
    this.operatioClaimService.getList().subscribe((res) => {
      console.log(res);
      
      this.operationClaims = res.items;
    });
  }

  //DOM Management

  clickAddBtn(){
    this.formContainer.nativeElement.classList.add("display");
    this.addModal.nativeElement.classList.add("display");
  }

  clickUpdateBtn(item:OperationClaim){
    this.loadUpdateForm(item);
    this.formContainer.nativeElement.classList.add("display");
    this.updateModal.nativeElement.classList.add("display");
  }

  clickDeleteBtn(item:OperationClaim){
    this.operationClaim = item;
    this.formContainer.nativeElement.classList.add("display");
    this.deleteModal.nativeElement.classList.add("display");
  }


  clickAddCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }
  clickUpdateCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }

  clickDeleteCloseBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }


  clickAddXButton(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }
  clickUpdateXButton(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }
  clickDeleteXButton(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }


  clickmodalAddActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.addModal.nativeElement.classList.remove("display");
  }

  clickmodalUpdateActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.updateModal.nativeElement.classList.remove("display");
  }

  clickmodalDeleteActionBtn(){
    this.formContainer.nativeElement.classList.remove("display");
    this.deleteModal.nativeElement.classList.remove("display");
  }
 
}
