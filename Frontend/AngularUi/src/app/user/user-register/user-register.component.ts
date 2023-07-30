import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, FormBuilder, ValidationErrors} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup; 
  user:any = {};

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    /* //this code clean using formBuilder in createRegistrationForm()
    this.registrationForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)]),
    }, this.passwordMatchingValidator()
    );
    */
    this.createRegistrationForm()
  }

  createRegistrationForm()
  {
    debugger
    this.registrationForm = this.fb.group(
      {
        userName : [null, Validators.required],
        email : [null, [Validators.required, Validators.email]],
        password : [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword:[null, [Validators.required]],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
        {
          validator: this.passwordMatchValidator
        }
    );
  } 
  
/*
   passwordMatchingValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      debugger
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;
      
      const notmatched = password !== confirmPassword;

      // Return null if validation is successful
      // Return an object with an error code if validation fails
      return notmatched ? { notmatched: true } : null;
  }
 }
*/


passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value; // Access the 'password' form control value
  const confirmPassword = control.get('confirmPassword')?.value; // Access the 'confirmPassword' form control value

  // Check if both fields have values and if they match
  if (password !== confirmPassword) {
    return { passwordMismatch: true };
  }

  return null; // Return null if validation passes
}

//  passwordMatchingValidatior(fg: FormGroup): Validators {
//   return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :
//       {notmatched: true};
// }

//  Getter Methods for all controls
 get userName(){
  return this.registrationForm.get("userName") as FormControl;
 }

 get email(){
  return this.registrationForm.get("email") as FormControl;
 }

 get password(){
  return this.registrationForm.get("password") as FormControl;
 }

 get confirmPassword(){
  return this.registrationForm.get("confirmPassword") as FormControl;
 }

 get mobile(){
  return this.registrationForm.get("mobile") as FormControl;
 }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.userService.addUser(this.user);
    this.registrationForm.reset();
  }
  
}
