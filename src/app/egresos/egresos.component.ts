import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../presupuesto.service';
import { egreso } from '../egreso.model';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {
egresos:egreso[];
  constructor(private presupuestoService:PresupuestoService) {
    this.egresos=this.presupuestoService.egr;
   }

  ngOnInit() {
  }
  eliminar(i:number)
  {
    this.presupuestoService.eliminarEgreso(i);
  }

}
