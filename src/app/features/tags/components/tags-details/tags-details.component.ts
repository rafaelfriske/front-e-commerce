import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tags-details',
  imports: [CommonModule, FormsModule],
  templateUrl: './tags-details.component.html',
  styleUrl: './tags-details.component.scss'
})
export class TagsDetailsComponent {
  tagDetails: any = {
    id: "123456",
    origin: {
      name: "Marlos",
      cpf: "00000000-00",
      phone: "(00)00000-0000",
      address:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    destination: {
      name: "Marlos",
      cpf: "00000000-00",
      phone: "(00)00000-0000",
      address:
        "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    package: {
      format: "Caixa/pacote",
      weight: "000000",
      height: "0000",
      width: "00000",
      length: "00000",
      value: "00000",
    },
    shipping: {
      cost: "R$ 00,00",
    },
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // In a real application, you would fetch the tag details using the ID from the route
    this.route.params.subscribe((params) => {
      const tagId = params["id"]
      // this.fetchTagDetails(tagId);
      console.log("Fetching tag details for ID:", tagId)
    })
  }

  printTag(): void {
    window.print()
  }

  // In a real application, you would implement this method to fetch the tag details from your API
  // private fetchTagDetails(id: string): void {
  //   this.tagService.getTagDetails(id).subscribe(
  //     (data) => {
  //       this.tagDetails = data;
  //     },
  //     (error) => {
  //       console.error('Error fetching tag details:', error);
  //     }
  //   );
  // }
}

