import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {

  nombre = ''; 
  fecha = ''; 
  hora = ''; 
  sintomas = ''; 

  formularioIncorrecto = false ; 

  constructor() { }

  ngOnInit(): void {
  }

  agregarCita(){
    if (this.nombre == '' || this.fecha == '' || this.hora == '' || this.sintomas == '' ) {
      this.formularioIncorrecto = true ; 
      return ; 
    }

    this.formularioIncorrecto = false ; 

    const CITA = {
      nombre: this.nombre,
      fecha : this.fecha,
      hora: this.hora,
      sintomas : this.sintomas
    }

    console.log(CITA); 

    this.resetCampos() ; 

  }
  
  resetCampos(){
    this.nombre = ''; 
    this.fecha = '' ; 
    this.hora = ''; 
    this.sintomas = ''; 
  }


}
