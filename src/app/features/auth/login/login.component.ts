import { Component } from '@angular/core';
import { FooterComponent } from "../../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/layout/header/header.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FooterComponent, HeaderComponent, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup
  hidePassword = true

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log("Form submitted", this.loginForm.value)
      this.router.navigateByUrl("dashboard");
      // Add your authentication logic here
    } else {
      this.loginForm.markAllAsTouched()
    }
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword
  }
}
