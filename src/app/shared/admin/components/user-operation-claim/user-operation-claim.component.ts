import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PageRequest } from 'src/app/models/dtos/pageRequest';
import { OperationClaim } from 'src/app/models/entity/operationClaim';
import { UserOperationClaim } from 'src/app/models/entity/userOperationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';

@Component({
  selector: 'app-user-operation-claim',
  templateUrl: './user-operation-claim.component.html',
  styleUrls: ['./user-operation-claim.component.css']
})
export class UserOperationClaimComponent implements OnInit {

  id:number;
  userId:number;
  operationClaimId:number;

  addForm:FormGroup;
  updateForm:FormGroup;

  userOperationClaim:UserOperationClaim;
  userOperationClaims:UserOperationClaim[] = [];

  operationClaims:OperationClaim[] = [];

  pageRequest:PageRequest = {page:0,pageSize:25};

  constructor(
    private userOperationClaimService:UserOperationClaimService,
    private operationClaimService:OperationClaimService
  ) { }

  ngOnInit(): void {
  }

  createAddForm(){
    this.addForm = new FormGroup({
      userId:new FormControl(0,Validators.required),
      operationClaimId:new FormControl(0,Validators.required)
    });
  }

  add(){
    if(this.addForm.valid){
      let userOperationClaimModel = Object.assign({},this.addForm.value);
      this.userOperationClaimService.add(userOperationClaimModel).subscribe((res) => {
        this.getList();
      });
    }
  }

  createupdateForm(){
    this.updateForm = new FormGroup({
      id:new FormControl(0,Validators.required),
      userId:new FormControl(0,Validators.required),
      operationClaimId:new FormControl(0,Validators.required)
    });
  }

  update(){
    if(this.updateForm.valid){
      let userOperationClaimModel = Object.assign({},this.updateForm.value);
      this.userOperationClaimService.update(userOperationClaimModel).subscribe((res) => {
        this.getList();
      });
    }
  }

  delete(id:number){
    this.userOperationClaimService.delete(id).subscribe((res) => {
      this.getList();
    });
  }

  getById(id:number){
    this.userOperationClaimService.getById(id).subscribe((res) => {
      this.userOperationClaim = res;

      this.updateForm.controls["id"].setValue(res.id);
      this.updateForm.controls["operationClaimId"].setValue(res.operationClaimId);
      this.updateForm.controls["userId"].setValue(res.userId);
    });
  }

  getList(){
    this.userOperationClaimService.getList(this.pageRequest).subscribe((res) => {
      this.userOperationClaims = res.items
    });
  }

  getListOperationClaim(){
    this.operationClaimService.getList().subscribe((res) => {
      this.operationClaims = res.items;
    });
  }
}
