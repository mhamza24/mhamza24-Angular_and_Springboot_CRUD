import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

@Component({
  selector: 'app-update-customer',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-customer.component.html',
  styleUrl: './update-customer.component.scss'
})
export class UpdateCustomerComponent {

  updateCustomerForm!:FormGroup;
  id:number=this.activeRoute.snapshot.params["id"];
  constructor(private activeRoute:ActivatedRoute,private service:CustomerService,private router:Router,private fb:FormBuilder){
    
  }

  ngOnInit()
  {
    this.getCustomerById(this.id);

    this.updateCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  getCustomerById(id:number)  
{
  
  this.service.getCustomerById(id).subscribe((res)=>{
    this.updateCustomerForm.patchValue(res)
  })
}

updateCustomer(){
  this.service.updateCustomer(this.id,this.updateCustomerForm.value).subscribe((res)=>{
    if(res.id !=null){
      this.router.navigateByUrl('')
    }
  })
}
}
