import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TecnicoService } from '../tecnico.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tecnico-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './tecnico-create.component.html',
  styleUrl: './tecnico-create.component.css'
})
export class TecnicoCreateComponent {

  form!: FormGroup;

      

  constructor(
    public tecnicoservice: TecnicoService,

    private router: Router

  ) { }

  ngOnInit(): void {

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

    this.tecnicoservice.create(this.form.value).subscribe((res:any) => {

         console.log('Tecnico created successfully!');

         this.router.navigateByUrl('tecnico/tecnico-index');

    })

  }

}
