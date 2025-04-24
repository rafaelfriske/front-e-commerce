import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddCashComponent } from './components/add-cash/add-cash.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,AddCashComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  accountBalance = "00,00"
  showAddBalanceModal = false

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

  searchCEP() {
    // Implement CEP search functionality
    console.log("Searching CEP...")
  }

  calculateWithDiscount() {
    // Implement calculation functionality
    console.log("Calculating with discount...")
  }

  addFunds() {
    this.showAddBalanceModal = true
  }

  closeAddBalanceModal() {
    this.showAddBalanceModal = false
  }

  handleAddBalance(data: { amount: number; method: string }) {
    // In a real application, you would call an API to process the payment
    console.log(`Adding ${data.amount} via ${data.method}`)

    // Update the balance (this is just for demonstration)
    const formattedAmount = data.amount.toFixed(2).replace(".", ",")
    this.accountBalance = formattedAmount

    // Close the modal
    this.showAddBalanceModal = false

    // Show success message (in a real app, you would use a proper notification system)
    alert(`Saldo adicionado com sucesso: R$ ${formattedAmount}`)
  }
}
