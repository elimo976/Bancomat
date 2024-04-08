import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      { label: 'Estratto Conto', icon: 'pi pi-fw pi-home', routerLink:'estratto-conto' },
      { label: 'Deposito', icon: 'pi pi-fw pi-calendar', routerLink:'deposito' },
      { label: 'Prelievo', icon: 'pi pi-fw pi-pencil', routerLink: 'prelievo' }
    ];
  }
}
