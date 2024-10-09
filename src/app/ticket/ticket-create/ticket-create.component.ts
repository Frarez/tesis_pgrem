import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TicketService } from '../ticket.service';


@Component({
  selector: 'app-ticket-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './ticket-create.component.html',
  styleUrl: './ticket-create.component.css'
})
export class TicketCreateComponent {
  
 form!: FormGroup

 constructor(
  public ticketservice: TicketService,

  private router: Router

) { }

ngOnInit(): void {

  this.form = new FormGroup({

    id_Ticket: new FormControl('', [Validators.required]),
    Tipo: new FormControl('', Validators.required),
    Detalle: new FormControl('', Validators.required),
    Fecha_Apertura: new FormControl('', Validators.required)
    

  });
}

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
  this.ticketservice.create(this.form.value).subscribe((res:any) => {
       console.log('Ticket created successfully!');
       this.router.navigateByUrl('ticket/ticket-index');

  })

}



}
