import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProductoI } from '../../models/tipoproducto';


@Injectable({
  providedIn: 'root'
})
export class TipoproductoService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/Tipo_Producto/`
 constructor(
   private http:HttpClient
 ) { }

 getAllTipo_producto():Observable<{tipo_producto:TipoProductoI[]}>{
   return this.http
     .get<{tipo_producto:TipoProductoI[]}>(this.base_path)
 }

 getOneTipoproducto(id: number):Observable<{tipoproducto:TipoProductoI[]}>{
   return this.http
     .get<{tipoproducto:TipoProductoI[]}>(`${this.base_path}${id}`)
 }

 createTipoproducto(data: any):Observable<TipoProductoI>{
   return this.http.post<TipoProductoI>(this.base_path, data)
 }

 updateTipoproducto(id: number, data: any): Observable<TipoProductoI> {
   return this.http.patch<TipoProductoI>(`${this.base_path}${id}`, data);
 }

 deleteTipoproducto(id: number): Observable<TipoProductoI> {
   return this.http.delete<TipoProductoI>(`${this.base_path}${id}`);
 }
}



