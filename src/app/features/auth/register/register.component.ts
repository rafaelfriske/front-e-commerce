import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { FooterComponent } from "../../../shared/components/layout/footer/footer.component";
import { HeaderComponent } from "../../../shared/components/layout/header/header.component";

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, FormsModule, FooterComponent, HeaderComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm: FormGroup
  hidePassword = true
  hideConfirmPassword = true
  selectedFile: File | null = null
  imagePreview: string | null = null

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      // Personal data
      fullName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      birthDate: ["", Validators.required],
      phone: ["", Validators.required],
      cpfCnpj: ["", Validators.required],
      agreeTerms: [false, Validators.requiredTrue],

      // Address
      address: ["", Validators.required],
      number: ["", Validators.required],
      neighborhood: ["", Validators.required],
      postalCode: ["", Validators.required],
      city: ["", Validators.required],
      state: ["", Validators.required],

      // Password
      password: ["", [
        Validators.required, 
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
      ]],
      confirmPassword: ["", Validators.required],
    }, { 
      validators: this.passwordMatchValidator 
    })
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value
    const confirmPassword = form.get('confirmPassword')?.value
    
    if (password && confirmPassword && password !== confirmPassword) {
      form.get('confirmPassword')?.setErrors({ mismatch: true })
      return { mismatch: true }
    }
    
    return null
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (input.files && input.files.length) {
      this.selectedFile = input.files[0]
      
      // Create preview
      const reader = new FileReader()
      reader.onload = () => {
        this.imagePreview = reader.result as string
      }
      reader.readAsDataURL(this.selectedFile)
    }
  }

  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form submitted', this.registerForm.value)
      // Add your registration logic here
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key)
        control?.markAsTouched()
      })
    }
  }
}
