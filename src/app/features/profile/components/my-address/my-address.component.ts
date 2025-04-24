import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-my-address',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './my-address.component.html',
  styleUrl: './my-address.component.scss'
})
export class MyAddressComponent implements OnInit {
  @Input() addressData: any = {
    street: "",
    number: "",
    neighborhood: "",
    postalCode: "",
    city: "",
    state: "",
  }
  @Output() close = new EventEmitter<void>()
  @Output() save = new EventEmitter<any>()

  addressForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.addressForm = this.fb.group({
      street: ["", Validators.required],
      number: ["", Validators.required],
      neighborhood: ["", Validators.required],
      postalCode: ["", [Validators.required, Validators.pattern(/^\d{5}-\d{3}$/)]],
      city: ["", Validators.required],
      state: ["", Validators.required],
    })
  }

  ngOnInit(): void {
    // Initialize form with address data
    this.addressForm.patchValue({
      street: this.addressData.street || "",
      number: this.addressData.number || "",
      neighborhood: this.addressData.neighborhood || "",
      postalCode: this.addressData.postalCode || "",
      city: this.addressData.city || "",
      state: this.addressData.state || "",
    })
  }

  closeModal(): void {
    this.close.emit()
  }

  saveAddress(): void {
    if (this.addressForm.valid) {
      this.save.emit(this.addressForm.value)
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.addressForm.controls).forEach((key) => {
        const control = this.addressForm.get(key)
        control?.markAsTouched()
      })
    }
  }

  // Prevent modal from closing when clicking inside the modal content
  preventClose(event: Event): void {
    event.stopPropagation()
  }

  // Format postal code (CEP) as user types
  formatPostalCode(event: any): void {
    let value = event.target.value.replace(/\D/g, "")

    if (value.length > 8) {
      value = value.substring(0, 8)
    }

    if (value.length > 5) {
      value = value.replace(/^(\d{5})(\d{1,3}).*/, "$1-$2")
    }

    this.addressForm.get("postalCode")?.setValue(value, { emitEvent: false })
  }

  // Search address by postal code
  searchAddressByCEP(): void {
    const postalCode = this.addressForm.get("postalCode")?.value.replace("-", "")

    if (postalCode && postalCode.length === 8) {
      // In a real application, you would call an API to get the address data
      // For this example, we'll just simulate a successful response
      console.log(`Searching address for postal code: ${postalCode}`)

      // Simulate API response delay
      setTimeout(() => {
        // This is just a mock response
        const mockAddress = {
          street: "Avenida Exemplo",
          neighborhood: "Bairro Exemplo",
          city: "Cidade Exemplo",
          state: "UF",
        }

        // Update form with the address data
        this.addressForm.patchValue({
          street: mockAddress.street,
          neighborhood: mockAddress.neighborhood,
          city: mockAddress.city,
          state: mockAddress.state,
        })
      }, 1000)
    }
  }
}

