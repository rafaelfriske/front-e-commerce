import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'app-help-center',
    imports: [CommonModule],
    templateUrl: './help-center.component.html',
    styleUrl: './help-center.component.scss'
  })
  export class HelpCenterComponent {
    faqItems: any[] = [
        {
          question: "Pergunta?",
          answer:
            "Descrição Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure Dolor In",
          isOpen: true,
        },
        {
          question: "Pergunta?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nisl quis nisl.",
          isOpen: false,
        },
        {
          question: "Pergunta?",
          answer:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          isOpen: false,
        },
        {
          question: "Pergunta?",
          answer:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          isOpen: false,
        },
        {
          question: "Pergunta?",
          answer:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          isOpen: false,
        },
        {
          question: "Pergunta?",
          answer:
            "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
          isOpen: false,
        },
        {
          question: "Pergunta?",
          answer:
            "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
          isOpen: false,
        },
      ]
    
      toggleFaq(index: number): void {
        this.faqItems[index].isOpen = !this.faqItems[index].isOpen
      }
    
      goToContact(): void {
        // Navigate to contact page
        console.log("Navigating to contact page")
      }
  }

