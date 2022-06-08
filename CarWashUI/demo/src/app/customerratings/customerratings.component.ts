// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-customerratings',
//   templateUrl: './customerratings.component.html',
//   styleUrls: ['./customerratings.component.css']
// })
// export class CustomerratingsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { CustomerService } from '../customer.service';

// @Component({
//   selector: 'app-customerratings',
//   templateUrl: './customerratings.component.html',
//   styleUrls: ['./customerratings.component.css']
// })
// export class CustomerratingsComponent implements OnInit {
//   ratingForm: FormGroup;

//   constructor(private route: Router, private apiService : CustomerService) {
//     this.ratingForm = new FormGroup({
//       FeedbackId: new FormControl(null, [Validators.required, Validators.email]),
//       FirstName: new FormControl(null, Validators.required),
//       Rating: new FormControl(null, [Validators.required]),
//       Comments: new FormControl(null, Validators.required)
//     })

      
//   }
   

//   // ngOnInit(): void {
//   // }
//   // carRating() {

//   //   if (this.ratingForm) {
//   //     this.apiService.addCarRating(this.ratingForm)
//   //       .subscribe(
//   //         (data) => { 
//   //           if (data) {
//   //             console.log("hello", data);
//   //             let CarserviceFeedback = JSON.stringify(this.ratingForm)
//   //             localStorage.setItem('CarRatingDetails', CarserviceFeedback)

//   //             this.route.navigateByUrl('/')
//   //           }

//   //           else {
//   //             alert("invalid details")
//   //           }
//   //         }
//   //       );
//   //   }
//   //   else {
//   //     this.validateAllFormFields(this.ratingForm);
//   //   }

//   // }

// // //  onclick() {
// //     this.apiService.getCarDetail(this.ratingForm).subscribe(
// //       (data) => {
// //         if(data) {
// //           this.ratingForm = data;
// //           console.log("car details from database" + this.ratingForm) 
// //         }
// //         else {
// //           console.log("error")
// //           alert("You don't have any booking history")
// //         }
// //       }
// //     )
// //   }
// //   validateAllFormFields(ratingForm: any) {
// //     throw new Error('Method not implemented.');
// //   }
// // }


      
// }




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { User } from '../User';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { CarserviceFeedback } from '../CarserviceFeedback';

@Component({
  selector: 'app-customerratings',
  templateUrl: './customerratings.component.html',
  styleUrls: ['./customerratings.component.css']
})
export class CustomerratingsComponent implements OnInit {

  ratingForm: FormGroup;
 // israting : boolean = false;
  myStorage = window.localStorage;
  constructor( private route : Router, private apiService : CustomerService) { 
    this.ratingForm = new FormGroup({
      FirstName: new FormControl(null, Validators.required),
       Rating: new FormControl(null, [Validators.required]),
       Comments: new FormControl(null, Validators.required)
    });  
  }
  
  isValid(controlName) {
    return this.ratingForm.get(controlName).invalid && (this.ratingForm.get(controlName).touched || this.ratingForm.get(controlName).dirty);
  }

  carRating(){
    if(this.ratingForm.valid){
      this.apiService.carRating(this.ratingForm.value).subscribe(
        (data)=>{
          if(data){
            console.log("rating completed")
            console.log("hello", data);
            //this.israting = true;
           // localStorage.setItem('userdetails',JSON.stringify(this.ratingForm.value))
           let CarserviceFeedback = JSON.stringify(this.ratingForm.value)
            localStorage.setItem('RatingDetails', CarserviceFeedback)
           // localStorage.setItem('FeedbackId', this.ratingForm.value.FeedbackId)
            alert("Successfully Submitted")
            this.route.navigateByUrl('/')
          }
          else{
            alert("User already provided rating")
          }
        },error =>{
          console.log(error +"error")
        }
      )
    }
 }

  ngOnInit(): void {
  }

}


