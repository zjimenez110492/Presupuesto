import { Component } from '@angular/core';
import { PresupuestoService } from './presupuesto.service';
import { IngresosComponent } from './ingresos/ingresos.component';
import { ingreso } from './ingreso.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'presupuesto-app';
 total:number;
  constructor(private presupuestoService:PresupuestoService)
  {
   
  }
  getTotal():number
  {
    let t=this.presupuestoService.calcularTotal();
    return t;
  }
  getIngresosTotal()
  {
    return this.presupuestoService.cacularIngresos();
  }
  getEgresosTotal()
  {
    return this.presupuestoService.cacularEgresos();
  }
  getPorcentajeIngresos()
  {
    return this.getIngresosTotal()/this.getTotal();
  }
  getPorcentajeEgresos()
  {
    return this.getEgresosTotal()/this.getTotal();
  }
}
