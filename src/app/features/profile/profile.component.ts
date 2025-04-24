import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  username = "Nome do usuário"

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
      route: "/help",
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
    console.log(`Navigating to ${route}`)
    // In a real app, you would use the Router service to navigate
    // this.router.navigate([route])
  }
}
