import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: 'app-add-cash',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
    templateUrl: './add-cash.component.html',
    styleUrl: './add-cash.component.scss'
  })
  export class AddCashComponent {
    @Output() close = new EventEmitter<void>()
    @Output() addBalance = new EventEmitter<{ amount: number; method: string }>()
    
    balanceForm: FormGroup
    
    constructor(private fb: FormBuilder) {
      this.balanceForm = this.fb.group({
        amount: ["00,00", [Validators.required, Validators.pattern(/^\d+(?:,\d{1,2})?$/)]]
      })
    }
    
    closeModal(): void {
      this.close.emit()
    }
    
    processPayment(method: string): void {
      if (this.balanceForm.valid) {
        // Convert comma to dot for numeric processing
        const amountStr = this.balanceForm.get("amount")?.value.replace(",", ".")
        const amount = parseFloat(amountStr)
        
        if (!isNaN(amount) && amount > 0) {
          this.addBalance.emit({ amount, method })
        }
      }
    }
    
    // Prevent modal from closing when clicking inside the modal content
    preventClose(event: Event): void {
      event.stopPropagation()
    }
    
    // Format the input as currency
    formatCurrency(event: any): void {
      let value = event.target.value
      
      // Remove non-numeric characters except comma
      value = value.replace(/[^\d,]/g, "")
      
      // Ensure only one comma
      const parts = value.split(",")
      if (parts.length > 2) {
        value = parts[0] + "," + parts.slice(1).join("")
      }
      
      // Limit to 2 decimal places
      if (parts.length > 1 && parts[1].length > 2) {
        value = parts[0] + "," + parts[1].substring(0, 2)
      }
      
      this.balanceForm.get("amount")?.setValue(value, { emitEvent: false })
    }
  }

