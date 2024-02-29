import { Component, OnInit } from '@angular/core';
// Servicio
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  paises:any = [];

  constructor( public _service: PaisesService ) { }

  ngOnInit() {
    this._service.getPaises().subscribe((data:any) =>{
      this.paises = data;
    });
  }

}
