import { Router, RouterLink } from '@angular/router';

import { CommonEngine } from '@angular/ssr';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomerService } from '../../service/customer.service';

interface Customer {
  id: number;
  name: string;
  email: string;
  status: string;
  createdAt: string;
}
@Component({
  selector: 'app-get-all-customers',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './get-all-customers.component.html',
  styleUrl: './get-all-customers.component.scss',
})
export class GetAllCustomersComponent {
  customers: Customer[] = [];

  constructor(private customerService: CustomerService,private router:Router) {}
  ngOnInit() {
    this.getAllCustomer();
  }

  getAllCustomer() {
    this.customerService.getAllCustomer().subscribe((res) => {
      this.customers = res;
    });
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id).subscribe((res) => {
      this.router.navigateByUrl('');
    });
  }
}
