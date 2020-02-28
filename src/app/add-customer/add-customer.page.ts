import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.page.html',
  styleUrls: ['./add-customer.page.scss'],
})
export class AddCustomerPage implements OnInit {

  name_customer: string = "";
  desc_customer: string = "";

  constructor() { }

  ngOnInit() {
  }

  createdProses() {
    console.log(this.name_customer);
    
  }

}
