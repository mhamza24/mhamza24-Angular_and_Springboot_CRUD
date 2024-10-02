package com.example.springandangularcurd.service;

import com.example.springandangularcurd.exception.CustomerNotFoundException;
import com.example.springandangularcurd.model.Customer;
import com.example.springandangularcurd.model.CustomerStatus;
import com.example.springandangularcurd.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomerService  {
    private final CustomerRepository customerRepository;

    public Customer postCustomer(Customer customer){
        return customerRepository.save(customer);
    }

    public List<Customer> getAllCustomers(){
        return customerRepository.findAll();
    }

    public Customer getCustomerById(long id){
        return customerRepository.findById(id).orElse(null);
    }


    public Customer updateCustomer(long id,Customer customer ){

        return customerRepository.findById(id).map(st -> {
            st.setName(customer.getName());
            st.setEmail(customer.getEmail());
            st.setStatus(CustomerStatus.Updated);
            return customerRepository.save(st);
        }).orElseThrow(()-> new CustomerNotFoundException("Sorry,this customer does not Exist"));


    }
    public void deleteCustomer(long id)
    {
        customerRepository.deleteById(id);
    }




}
