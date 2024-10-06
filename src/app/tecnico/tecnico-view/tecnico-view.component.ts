import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnico } from '../tecnico';
import { TecnicoService } from '../tecnico.service';


@Component({
  selector: 'app-tecnico-view',
  standalone: true,
  imports: [],
  templateUrl: './tecnico-view.component.html',
  styleUrl: './tecnico-view.component.css'
})
export class TecnicoViewComponent {

  id_Tecnico!: number;
  tecnico!: Tecnico;

  constructor(

    public tecnicoservice: TecnicoService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

   ngOnInit(): void {

    this.id_Tecnico = this.route.snapshot.params['tecnicoId'];
    this.tecnicoservice.find(this.id_Tecnico).subscribe((data: Tecnico)=>{
      this.tecnico = data;

    });

  }

}
