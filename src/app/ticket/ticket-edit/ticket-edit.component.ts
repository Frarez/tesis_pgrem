import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ticket } from '../ticket';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-ticket-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './ticket-edit.component.html',
  styleUrl: './ticket-edit.component.css'
})
export class TicketEditComponent {


  id_Ticket!: number;
  ticket!: Ticket;
  form!: FormGroup;

  constructor(

    public ticketService: TicketService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  ngOnInit(): void {

    this.id_Ticket= this.route.snapshot.params['ticketId'];
    this.ticketService.find(this.id_Ticket).subscribe((data: Ticket)=>{
      console.log(data)
      this.ticket = data;

    }); 
    
    this.form = new FormGroup({
      
      Fecha_Cierre: new FormControl('', [Validators.required]),
      Estado: new FormControl('', Validators.required),
      Comentario: new FormControl('', Validators.required),


    });

  }
  get f(){

    return this.form.controls;

  }
  submit(){

    console.log(this.form.value);
    this.ticketService.update(this.id_Ticket, this.form.value).subscribe((res:any) => {
         console.log('Ticket updated successfully!');
         this.router.navigateByUrl('ticket/ticket-index');

    })

  }


}
