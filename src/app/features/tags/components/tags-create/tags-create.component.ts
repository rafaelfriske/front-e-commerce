import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
    selector: 'app-tags-create',
    imports: [CommonModule,FormsModule, ReactiveFormsModule],
    templateUrl: './tags-create.component.html',
    styleUrl: './tags-create.component.scss'
  })
  export class TagsCreateComponent {
    tagForm: FormGroup

    packageFormats = [
      { value: "caixa", label: "Caixa/Pacote" },
      { value: "envelope", label: "Envelope" },
      { value: "rolo", label: "Rolo/Prisma" },
    ]
  
    weightOptions = [
      { value: "000", label: "000" },
      { value: "500", label: "500g" },
      { value: "1000", label: "1kg" },
      { value: "2000", label: "2kg" },
      { value: "5000", label: "5kg" },
    ]
  
    constructor(private fb: FormBuilder) {
      this.tagForm = this.fb.group({
        // Recipient data
        recipientName: ["", Validators.required],
        recipientCpf: ["", Validators.required],
        recipientPhone: ["", Validators.required],
  
        // Origin
        originCep: ["", Validators.required],
        packageFormat: ["caixa", Validators.required],
        weight: ["000", Validators.required],
        height: ["", Validators.required],
        width: ["", Validators.required],
        length: ["", Validators.required],
  
        // Destination
        destinationCep: ["", Validators.required],
        address: ["", Validators.required],
        neighborhood: ["", Validators.required],
        state: ["", Validators.required],
        city: ["", Validators.required],
  
        // Shipping options
        inPersonDelivery: [false],
        deliveryConfirmation: [false],
        insurance: [false],
        declaredValue: [""],
      })
    }
  
    searchOriginCep() {
      // Implement CEP search functionality for origin
      console.log("Searching origin CEP...")
    }
  
    searchDestinationCep() {
      // Implement CEP search functionality for destination
      console.log("Searching destination CEP...")
    }
  
    onSubmit() {
      if (this.tagForm.valid) {
        console.log("Form submitted", this.tagForm.value)
        // Add your tag creation logic here
      } else {
        // Mark all fields as touched to trigger validation messages
        Object.keys(this.tagForm.controls).forEach((key) => {
          const control = this.tagForm.get(key)
          control?.markAsTouched()
        })
      }
    }
  }

