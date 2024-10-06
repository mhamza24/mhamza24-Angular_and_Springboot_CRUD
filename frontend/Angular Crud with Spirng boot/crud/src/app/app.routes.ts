import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterOutlet, Routes } from '@angular/router';

import { GetAllCustomersComponent } from './components/get-all-customers/get-all-customers.component';
import { PostCustomerComponent } from './components/post-customer/post-customer.component';

export const routes: Routes = [
    {   
        path:"post_customer",
       // component:PostCustomerComponent,
        //providers: [HttpClient,HttpClientModule,RouterOutlet,FormsModule,ReactiveFormsModule] // Ensure HttpClientModule is imported here
        loadComponent:() =>import('./components/post-customer/post-customer.component').then((c)=>c.PostCustomerComponent),
        
    },
    {   
        path:"",
       // component:GetAllCustomersComponent,
        loadComponent:() =>import('./components/get-all-customers/get-all-customers.component').then((c)=>c.GetAllCustomersComponent),
       // providers: [HttpClient,HttpClientModule,RouterOutlet,FormsModule,ReactiveFormsModule] // Ensure HttpClientModule is imported here
    },
    {   
        path:"update_customer/:id",
       // component:GetAllCustomersComponent,
        loadComponent:() =>import('./components/update-customer/update-customer.component').then((c)=>c.UpdateCustomerComponent),
       // providers: [HttpClient,HttpClientModule,RouterOutlet,FormsModule,ReactiveFormsModule] // Ensure HttpClientModule is imported here
    }
];
