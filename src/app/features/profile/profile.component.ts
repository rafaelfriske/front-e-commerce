import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MyDataComponent } from './components/my-data/my-data.component';
import { Router, RouterModule } from '@angular/router';
import { MyAddressComponent } from './components/my-address/my-address.component';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, MyDataComponent, MyAddressComponent, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  username = "Nome do usuário"
  showMyDataModal = false
  showAddressModal = false

  userData: any = {
    companyName: "Exemplo preenchido",
    cnpj: "00.000.000/0000-00",
    email: "mail@email.com",
    phone: "(000)0000-0000",
    responsibleName: "Exemplo preenchido",
  }

  addressData: any = {
    street: "Exemplo Preenchido",
    number: "Exemplo Preenchido",
    neighborhood: "Exemplo Preenchido",
    postalCode: "00000-000",
    city: "Exemplo Preenchido",
    state: "Exemplo Preenchido",
  }
  constructor(private router: Router) {}
  profileMenuItems = [
    {
      icon: "user",
      label: "Meus dados",
      route: "/profile/data",
    },
    {
      icon: "map-pin",
      label: "Endereço",
      route: "/profile/address",
    },
    {
      icon: "lock",
      label: "Alterar senha",
      route: "/profile/change-password",
    },
    {
      icon: "file-text",
      label: "Alterar plano",
      route: "/profile/change-plan",
    },
    {
      icon: "help-circle",
      label: "Central de ajuda",
      route: "/help-center",
    },
    {
      icon: "file",
      label: "Termos de Uso",
      route: "/terms",
    },
    {
      icon: "shield",
      label: "Política de privacidade",
      route: "/privacy",
    },
    {
      icon: "mail",
      label: "Contato",
      route: "/contact",
    },
  ]

  uploadProfilePicture() {
    // Implement profile picture upload functionality
    console.log("Upload profile picture")
  }
  navigateTo(route: string) {
    if (route === "/profile/data") {
      this.openMyDataModal()
    } else if (route === "/profile/address") {
      this.openAddressModal()
    } else {
      this.router.navigate([route])
    }
  }

  openMyDataModal() {
    this.showMyDataModal = true
  }

  closeMyDataModal() {
    this.showMyDataModal = false
  }

  saveUserData(data: any) {
    // In a real application, you would call an API to save the user data
    console.log("Saving user data:", data)

    // Update the local user data
    this.userData = { ...data }

    // Close the modal
    this.showMyDataModal = false

    // Show success message (in a real app, you would use a proper notification system)
    alert("Dados salvos com sucesso!")
  }

  openAddressModal() {
    this.showAddressModal = true
  }

  closeAddressModal() {
    this.showAddressModal = false
  }

  saveAddress(data: any) {
    // In a real application, you would call an API to save the address data
    console.log("Saving address data:", data)

    // Update the local address data
    this.addressData = { ...data }

    // Close the modal
    this.showAddressModal = false

    // Show success message (in a real app, you would use a proper notification system)
    alert("Endereço salvo com sucesso!")
  }
}
