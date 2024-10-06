import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Tecnico } from '../tecnico';
import { TecnicoService } from '../tecnico.service';

@Component({
  selector: 'app-tecnico-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tecnico-index.component.html',
  styleUrl: './tecnico-index.component.css'
})
export class TecnicoIndexComponent {
  tecnicos: Tecnico[] = [];

  constructor(public tecnicoservice: TecnicoService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
   
    this.tecnicoservice.getAll().subscribe((data: Tecnico[])=>{
      this.tecnicos = data;
      console.log(this.tecnicos);

    })  

  }

 
  deletePost(id:number){
    this.tecnicoservice.delete(id).subscribe(res => {
         this.tecnicos = this.tecnicos.filter(item => item.id_Tecnico !== id);
         console.log('Post deleted successfully!');
    })
  }
}
