import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  currentYear = new Date().getFullYear()

  // Navigation links
  navLinks = [
    { label: "Início", url: "/" },
    { label: "Sobre", url: "/sobre" },
    { label: "Política de privacidade", url: "/privacidade" },
    { label: "Termos de uso", url: "/termos" },
    { label: "Contato", url: "/contato" },
  ]

  // Social media links
  socialLinks = [
    { name: "Instagram", icon: "assets/icons/instagram.svg", url: "https://instagram.com" },
    { name: "WhatsApp", icon: "assets/icons/whatsapp.svg", url: "https://whatsapp.com" },
    { name: "YouTube", icon: "assets/icons/youtube.svg", url: "https://youtube.com" },
  ]

}
