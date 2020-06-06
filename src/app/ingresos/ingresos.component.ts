import { Component, OnInit } from '@angular/core';
import { ingreso } from '../ingreso.model';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
ingresos:ingreso[];
  constructor(private presupuestoService:PresupuestoService) {
    this.ingresos=this.presupuestoService.ing;
   }

  ngOnInit() {
  }
  eliminar(i:number)
  {
    this.presupuestoService.eliminarIngreso(i);
  }

}
