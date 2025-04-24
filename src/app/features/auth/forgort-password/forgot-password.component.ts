import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HeaderComponent } from "../../../shared/components/layout/header/header.component";
import { FooterComponent } from '../../../shared/components/layout/footer/footer.component';

@Component({
  selector: 'app-forgot-password',
  imports: [ReactiveFormsModule, CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotPasswordForm: FormGroup
  isSubmitting = false
  submitError = ""

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.forgotPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
    })
  }

  onSubmit() {
    if (this.forgotPasswordForm.valid) {
      this.isSubmitting = true
      this.submitError = ""

      // In a real application, you would call an API to send a password reset email
      const email = this.forgotPasswordForm.get("email")?.value

      // Simulate API call
      setTimeout(() => {
        console.log(`Password reset email sent to: ${email}`)
        this.isSubmitting = false

        // Navigate to a confirmation page or show a success message
        this.router.navigate(["/reset-password"])
      }, 1500)
    } else {
      // Mark fields as touched to trigger validation messages
      this.forgotPasswordForm.markAllAsTouched()
    }
  }
}
