package com.example.springandangularcurd.controller;

import com.example.springandangularcurd.model.Customer;
import com.example.springandangularcurd.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@RequiredArgsConstructor
@CrossOrigin("*")
public class CustomerController
{
    private final CustomerService customerService;

    @GetMapping("/get_all")
    public ResponseEntity<List<Customer>> getAllCustomers()
    {
        List<Customer> createdCustomer = customerService.getAllCustomers();
        return new ResponseEntity<>(createdCustomer, HttpStatus.OK);
    }

    @GetMapping("/get_by_id/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id)
    {
        Customer getCustomer = customerService.getCustomerById(id);
        if(getCustomer==null)
        {
            return ResponseEntity.notFound().build();
        }
        return new ResponseEntity<>(getCustomer, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Customer> postCustomer(@RequestBody Customer customer)
    {
        System.out.println("here");
        Customer createdCustomer = customerService.postCustomer(customer);
        return new ResponseEntity<>(createdCustomer, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable long id,@RequestBody Customer customer){
        return new ResponseEntity<>(customerService.updateCustomer(id,customer), HttpStatus.OK);
    }

    @DeleteMapping("/remove/{id}")
    public ResponseEntity<?> deleteCustomer(@PathVariable long id)
    {
       Customer customerTobeDeleted= customerService.getCustomerById(id);
       if(customerTobeDeleted==null)
       {
           return ResponseEntity.notFound().build();
       }
       else {
           customerService.deleteCustomer(customerTobeDeleted.getId());
       }
        return ResponseEntity.ok().build();
    }



}
