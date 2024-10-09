import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-view',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './ticket-view.component.html',
  styleUrl: './ticket-view.component.css'
})
export class TicketViewComponent {

  id_Ticket!: number;
  ticket!: Ticket;

  constructor(

    public ticketservice: TicketService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

   ngOnInit(): void {

    this.id_Ticket = this.route.snapshot.params['ticketId'];
    this.ticketservice.find(this.id_Ticket).subscribe((data: Ticket)=>{
      this.ticket = data;

    });

  }

}


