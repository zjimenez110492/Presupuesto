import { Component, OnInit } from '@angular/core';
import { ingreso } from '../ingreso.model';
import { egreso } from '../egreso.model';
import { PresupuestoService } from '../presupuesto.service';
import {NgForm, FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
 
  descripcionInput:string;
  valorInput:number;
  tipo:string="IngresoOperacion";

  constructor(private presupuestoService:PresupuestoService) 
  { }
  ngOnInit() {
  }
  agregar()
  {
    if(this.tipo==="IngresoOperacion")
      this.presupuestoService.agregarIngreso(this.valorInput,this.descripcionInput);    
    else      
      this.presupuestoService.agregarEgreso(this.valorInput,this.descripcionInput);    
  }
  tipoOperacion(evento)
  {
    this.tipo=evento.target.value;
  }
}