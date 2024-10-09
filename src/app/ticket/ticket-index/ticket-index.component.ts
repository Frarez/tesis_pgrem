import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';

@Component({
  selector: 'app-ticket-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ticket-index.component.html',
  styleUrl: './ticket-index.component.css'
})
export class TicketIndexComponent {
  tickets: Ticket[] = [];
  constructor(public ticketservice: TicketService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
   
    this.ticketservice.getAll().subscribe((data: Ticket[])=>{
      this.tickets = data;
      console.log(this.tickets);
    })  
  }

 
  deletePost(id:number){
    this.ticketservice.delete(id).subscribe(res => {
         this.tickets = this.tickets.filter(item => item.id_Ticket !== id);
         console.log('Post deleted successfully!');
    })
  }
}



