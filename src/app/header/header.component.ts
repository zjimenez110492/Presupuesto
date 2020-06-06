import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { PresupuestoService } from '../presupuesto.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  @Input() totalIngreso:number;
  @Input() totalEgresos:number;
  @Input() porcentajeIngresos:number;
  @Input() porcentajeEgresos:number;
  @Input() total:number;
  constructor() { 
    
  }


  ngOnInit() {
   
  }

}
