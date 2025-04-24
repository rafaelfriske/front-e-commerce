import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-my-data',
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './my-data.component.html',
    styleUrl: './my-data.component.scss'
  })
  export class MyDataComponent  implements OnInit {
    @Input() userData: any = {
      companyName: "",
      cnpj: "",
      email: "",
      phone: "",
      responsibleName: "",
    }
    @Output() close = new EventEmitter<void>()
    @Output() save = new EventEmitter<any>()
  
    userDataForm: FormGroup
  
    constructor(private fb: FormBuilder) {
      this.userDataForm = this.fb.group({
        companyName: ["", Validators.required],
        cnpj: ["", [Validators.required, Validators.pattern(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/)]],
        email: ["", [Validators.required, Validators.email]],
        phone: ["", [Validators.required, Validators.pattern(/^$$\d{2,3}$$\d{4,5}\-\d{4}$/)]],
        responsibleName: ["", Validators.required],
      })
    }
  
    ngOnInit(): void {
      // Initialize form with user data
      this.userDataForm.patchValue({
        companyName: this.userData.companyName || "",
        cnpj: this.userData.cnpj || "",
        email: this.userData.email || "",
        phone: this.userData.phone || "",
        responsibleName: this.userData.responsibleName || "",
      })
    }
  
    closeModal(): void {
      this.close.emit()
    }
  
    saveData(): void {
      if (this.userDataForm.valid) {
        this.save.emit(this.userDataForm.value)
      } else {
        // Mark all fields as touched to trigger validation messages
        Object.keys(this.userDataForm.controls).forEach((key) => {
          const control = this.userDataForm.get(key)
          control?.markAsTouched()
        })
      }
    }
  
    // Prevent modal from closing when clicking inside the modal content
    preventClose(event: Event): void {
      event.stopPropagation()
    }
  
    // Format CNPJ as user types
    formatCNPJ(event: any): void {
      let value = event.target.value.replace(/\D/g, "")
      
      if (value.length > 14) {
        value = value.substring(0, 14)
      }
      
      if (value.length > 12) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2}).*/, "$1.$2.$3/$4-$5")
      } else if (value.length > 8) {
        value = value.replace(/^(\d{2})(\d{3})(\d{3})(\d*).*/, "$1.$2.$3/$4")
      } else if (value.length > 5) {
        value = value.replace(/^(\d{2})(\d{3})(\d*).*/, "$1.$2.$3")
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d*).*/, "$1.$2")
      }
      
      this.userDataForm.get("cnpj")?.setValue(value, { emitEvent: false })
    }
  
    // Format phone number as user types
    formatPhone(event: any): void {
      let value = event.target.value.replace(/\D/g, "")
      
      if (value.length > 11) {
        value = value.substring(0, 11)
      }
      
      if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{5})(\d*).*/, "($1)$2-$3")
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d*).*/, "($1)$2")
      }
      
      this.userDataForm.get("phone")?.setValue(value, { emitEvent: false })
    }
  }

