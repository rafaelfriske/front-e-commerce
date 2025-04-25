import { CommonModule } from "@angular/common"
import { Component } from "@angular/core"
import { RouterModule, Router } from "@angular/router"
import { HeaderComponent } from "../../shared/components/layout/header/header.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
    selector: "app-payment-forms",
    templateUrl: "./payment-forms.component.html",
    styleUrls: ["./payment-forms.component.scss"],
    imports: [RouterModule, CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent]
})
export class PaymentFormsComponent {
    selectedPaymentMethod: "pix" | "credit-card" | "account-balance" = "pix"
    totalAmount = "00,00"
  
    creditCardForm = {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
      cpf: "",
      birthDate: "",
      paymentMethod: "À vista - Até 0% de desconto - R$ 00,00",
    }
  
    constructor(private router: Router) {}
  
    selectPaymentMethod(method: "pix" | "credit-card" | "account-balance") {
      this.selectedPaymentMethod = method
    }
  
    goBack() {
      // Navigate back to previous page
      this.router.navigate(["/dashboard"])
    }
  
    processPayment() {
      // Process payment based on selected method
      console.log(`Processing payment with ${this.selectedPaymentMethod}`)
  
      // In a real application, you would call an API to process the payment
      // and then navigate to a confirmation page
      setTimeout(() => {
        this.router.navigate(["/payment-success"])
      }, 1500)
    }
  
    formatCPF(event: any): void {
      let value = event.target.value.replace(/\D/g, "")
  
      if (value.length > 11) {
        value = value.substring(0, 11)
      }
  
      if (value.length > 9) {
        value = value.replace(/^(\d{9})(\d{2})$/, "$1-$2")
      }
  
      this.creditCardForm.cpf = value
    }
  
    formatExpiryDate(event: any): void {
      let value = event.target.value.replace(/\D/g, "")
  
      if (value.length > 4) {
        value = value.substring(0, 4)
      }
  
      if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,2})$/, "$1/$2")
      }
  
      this.creditCardForm.expiryDate = value
    }
  
    formatBirthDate(event: any): void {
      let value = event.target.value.replace(/\D/g, "")
  
      if (value.length > 8) {
        value = value.substring(0, 8)
      }
  
      if (value.length > 4) {
        value = value.replace(/^(\d{2})(\d{2})(\d{0,4})$/, "$1/$2/$3")
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,2})$/, "$1/$2")
      }
  
      this.creditCardForm.birthDate = value
    }
}
