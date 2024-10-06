import { Component } from '@angular/core';
import { Tecnico } from '../tecnico';
import { TecnicoService } from '../tecnico.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnico-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tecnico-edit.component.html',
  styleUrl: './tecnico-edit.component.css'
})
export class TecnicoEditComponent {

  id_Tecnico!: number;
  tecnico!: Tecnico;
  form!: FormGroup;

  constructor(

    public tecnicoService: TecnicoService,
    private route: ActivatedRoute,
    private router: Router

  ) { }
  ngOnInit(): void {

    this.id_Tecnico= this.route.snapshot.params['tecnicoId'];
    this.tecnicoService.find(this.id_Tecnico).subscribe((data: Tecnico)=>{
      this.tecnico = data;

    }); 
    this.form = new FormGroup({
      
      id_Tecnico: new FormControl('', [Validators.required]),
      Rut: new FormControl('', Validators.required),
      Nombre: new FormControl('', Validators.required),
      Email: new FormControl('', Validators.required),
      Fecha_contrato: new FormControl('', Validators.required)

    });

  }
  get f(){

    return this.form.controls;

  }
  submit(){

    console.log(this.form.value);
    this.tecnicoService.update(this.id_Tecnico, this.form.value).subscribe((res:any) => {
         console.log('Tecnico updated successfully!');
         this.router.navigateByUrl('tecnico/tecnico-index');

    })

  }
}
