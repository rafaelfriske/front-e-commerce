import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms"
import { RouterModule, Router } from "@angular/router"
import { HeaderComponent } from "../../../../../shared/components/layout/header/header.component";
import { FooterComponent } from "../../../../../shared/components/layout/footer/footer.component";

@Component({
  selector: "app-reset-password",
  templateUrl: "./reset-password.component.html",
  imports: [ReactiveFormsModule, RouterModule, CommonModule, HeaderComponent, FooterComponent],
  styleUrls: ["./reset-password.component.scss"],
})
export class ResetPasswordComponent {
  resetPasswordForm: FormGroup
  hidePassword = true
  hideConfirmPassword = true
  isSubmitting = false
  submitError = ""

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.resetPasswordForm = this.fb.group(
      {
        code: ["", [Validators.required, Validators.minLength(4)]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", Validators.required],
      },
      { validators: this.passwordMatchValidator },
    )
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get("password")?.value
    const confirmPassword = form.get("confirmPassword")?.value

    if (password && confirmPassword && password !== confirmPassword) {
      form.get("confirmPassword")?.setErrors({ mismatch: true })
      return { mismatch: true }
    }

    return null
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword
  }

  toggleConfirmPasswordVisibility() {
    this.hideConfirmPassword = !this.hideConfirmPassword
  }

  onSubmit() {
    if (this.resetPasswordForm.valid) {
      this.isSubmitting = true
      this.submitError = ""

      // In a real application, you would call an API to reset the password
      const code = this.resetPasswordForm.get("code")?.value
      const password = this.resetPasswordForm.get("password")?.value

      // Simulate API call
      setTimeout(() => {
        console.log(`Password reset with code: ${code} and new password`)
        this.isSubmitting = false

        // Navigate to login page or show a success message
        this.router.navigate(["/reset-success"])
      }, 1500)
    } else {
      // Mark fields as touched to trigger validation messages
      this.resetPasswordForm.markAllAsTouched()
    }
  }
}
