import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-post-customer',
  standalone: true,
  imports: [
    HttpClientModule, 
    ReactiveFormsModule,

  ],
  templateUrl: './post-customer.component.html',
  styleUrls: ['./post-customer.component.scss'] // Fix 'styleUrl' typo
})
export class PostCustomerComponent {

   postCustomerForm!: FormGroup;

  constructor(private customerService: CustomerService, private fb: FormBuilder,private router:Router) { }

  ngOnInit() {
    this.postCustomerForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });
  }

  postCustomer(){
    this.customerService.postCustomer(this.postCustomerForm.value).subscribe((res)=>{
      this.router.navigateByUrl('')
    })
    
    
  }
}