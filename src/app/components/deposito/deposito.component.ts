import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit{
  items: MenuItem[] | undefined
  ngOnInit(): void {
    this.items = [
      { label: 'Deposita contante', icon: 'pi pi-fw pi-home', routerLink:'contante' },
      { label: 'Deposita assegni', icon: 'pi pi-fw pi-calendar', routerLink:'assegni' }
    ]
  }
}
