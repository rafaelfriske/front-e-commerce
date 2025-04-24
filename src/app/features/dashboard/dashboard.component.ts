import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  accountBalance = "00,00"

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
    // Implement add funds functionality
    console.log("Adding funds...")
  }
}
