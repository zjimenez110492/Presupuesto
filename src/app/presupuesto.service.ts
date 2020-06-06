import { Injectable, OnChanges } from '@angular/core';
import {ingreso} from './ingreso.model'
import { egreso } from './egreso.model';
@Injectable({
  providedIn: 'root'
})
export class PresupuestoService{
  ing :ingreso[];
  egr: egreso[];
  public totalIngresos:number;
  public totalEgresos:number;
  public total:number;
  constructor()
  {  
    this.total=0;
    this.totalEgresos=0;
    this.totalIngresos=0;
    this.ing=[
      {
        valor:2100,
        descripcion:"Salariooooo"},
      {
        valor:1500,
        descripcion: "Venta cocheeeee"
      }
    ];
    this.egr=[
      {
        valor:900.0,
        descripcion:"Renta Departamento"},
      {
        valor:435.28,
        descripcion: "Ropa"
      }
    ];
    this.cacularEgresos();
    this.cacularIngresos();
    this.calcularTotal();
  }
  
  agregarIngreso(val:number, desc:string)
  {
    this.ing.push(new ingreso(val,desc));    
  }
  eliminarIngreso(i:number)
  {
    this.ing.splice(i,1);
  }
  eliminarEgreso(i:number)
  {
    this.egr.splice(i,1);
  }
  agregarEgreso(val:number, desc:string)
  { 
   this.egr.push(new egreso(val,desc));
  }
  cacularIngresos():number
  {
    let calcIngreso=0;
    if(this.ing!=null)    
      for(let i of this.ing)
        calcIngreso+=i.valor;   
    this.totalIngresos=calcIngreso;    
    return calcIngreso;
  }
  cacularEgresos():number
  {
    let calcEgreso=0;
    if(this.egr!=null)
     for(let e of this.egr)     
        calcEgreso+=e.valor;
    this.totalEgresos=calcEgreso;
    return calcEgreso;
  }
  calcularTotal():number
  {
    this.total=this.totalIngresos+this.totalEgresos;
    return this.total;
  }
 
}
