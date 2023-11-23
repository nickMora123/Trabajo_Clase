// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {

// }

import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opc: MenuItem[] = [];
  estilosMenu: {}= {
    'background-color': '#edd266',
    'border': '0',
  }
  constructor() { }

  ngOnInit(): void {

    this.opc = [
      {
        label: 'Clientes',
        icon: 'pi pi-fw pi-users',
        routerLink: '/Cliente'
      },
      {
        label: 'Tipo Productos',
        icon: 'pi pi-fw pi-qrcode',
        routerLink: '/tipoproductos'
      },
      {
        label: 'Productos',
        icon: 'pi pi-fw pi-shopping-bag',
        routerLink: '/Producto'
      },
      {
        label: 'Ventas',
        icon: 'pi pi-fw pi-shopping-cart',
        routerLink: '/Venta'
      }
    ];
  }

}
