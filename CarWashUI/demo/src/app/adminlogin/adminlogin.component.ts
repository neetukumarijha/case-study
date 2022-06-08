import { Component, OnInit } from '@angular/core';
//import { CustomerService } from '../customer.service';
import { AdminService } from '../Admin.service';
import { Router } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})

export class AdminloginComponent implements OnInit {

  userdetails : any;
  AdminForm: FormGroup;
  myStorage = window.localStorage;
  isLogin : boolean = false;
  
  constructor(private route: Router, private apiService: AdminService) {
    this.AdminForm = new FormGroup({
      emailId: new FormControl(null, [Validators.required, Validators.email, Validators.minLength(4)]),
      password: new FormControl(null, Validators.required)
    });
  }

  isValid(controlName) {
    return this.AdminForm.get(controlName).invalid && (this.AdminForm.get(controlName).touched || this.AdminForm.get(controlName).dirty);
  }

  login() {
    console.log(this.AdminForm.value);

    if (this.AdminForm.valid) {
      this.apiService.login(this.AdminForm.value)
        .subscribe(
          (data) => {
            if (data) {
              this.userdetails=data;
              this.isLogin=true;
              localStorage.setItem('isUserLoggedIn', JSON.stringify(this.isLogin));
              console.log(" Admin login completed")
              localStorage.setItem('name',this.userdetails.name)
              localStorage.setItem('userdetails',JSON.stringify(this.AdminForm.value))
              console.log(this.userdetails.name + " name")
              alert('Successfully logged In')
              this.route.navigateByUrl('/')
            }

            else {
              alert("Invalid emailId or password")
            }
          },
          error => {
            console.log(error + 'error')
          }
        );
    }


  }

  ngOnInit(): void {

  }

}