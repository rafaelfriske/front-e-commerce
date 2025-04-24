import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tags',
  imports: [CommonModule,FormsModule, RouterModule],
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.scss'
})
export class TagsComponent {
  tags: any[] = []
  filteredTags: any[] = []
  searchQuery = ""
  currentPage = 1
  itemsPerPage = 4
  totalPages = 1

  constructor(private router: Router){

  }

  ngOnInit(): void {
    // Mock data - in a real app, this would come from a service
    this.tags = [
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
      { id: "#01201AS", clientName: "NOME DO CLIENTE", cpf: "00000000-00" },
    ]

    this.updateFilteredTags()
  }

  search(): void {
    this.currentPage = 1
    this.updateFilteredTags()
  }

  updateFilteredTags(): void {
    // Filter tags based on search query
    const filtered = this.searchQuery
      ? this.tags.filter(
          (tag) =>
            tag.id.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            tag.clientName.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
            tag.cpf.includes(this.searchQuery),
        )
      : [...this.tags]

    // Calculate total pages
    this.totalPages = Math.ceil(filtered.length / this.itemsPerPage)

    // Get current page items
    const startIndex = (this.currentPage - 1) * this.itemsPerPage
    this.filteredTags = filtered.slice(startIndex, startIndex + this.itemsPerPage)
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page
      this.updateFilteredTags()
    }
  }

  openFilter(): void {
    // Implement filter functionality
    console.log("Open filter")
  }

  createNewTag(): void {
    this.router.navigateByUrl("/tags/create")
  }
}
