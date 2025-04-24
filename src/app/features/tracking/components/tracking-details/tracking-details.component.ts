import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-tracking-details',
    imports: [CommonModule],
    templateUrl: './tracking-details.component.html',
    styleUrl: './tracking-details.component.scss'
  })
  export class TrackingDetailsComponent {
    trackingDetails: any = {
      order: {
        code: "00000000",
        date: "00/00/00",
      },
      status: {
        current: "awaiting",
        description: "Aguardando Confirmação",
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
      trackingCode: "00000000000000000000000",
    }
  
    constructor(private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      // In a real application, you would fetch the tracking details using the ID from the route
      this.route.params.subscribe((params) => {
        const trackingId = params["id"]
        // this.fetchTrackingDetails(trackingId);
        console.log("Fetching tracking details for ID:", trackingId)
      })
    }
  
    copyTrackingCode(): void {
      navigator.clipboard.writeText(this.trackingDetails.trackingCode)
        .then(() => {
          alert("Código de rastreio copiado!")
        })
        .catch(err => {
          console.error('Erro ao copiar código de rastreio:', err)
        })
    }
  }

