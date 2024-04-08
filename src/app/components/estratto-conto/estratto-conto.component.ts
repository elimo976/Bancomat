import { Component } from '@angular/core';
import { SaldoContabileService } from 'src/app/services/saldo-contabile.service';

@Component({
  selector: 'app-estratto-conto',
  templateUrl: './estratto-conto.component.html',
  styleUrls: ['./estratto-conto.component.css']
})
export class EstrattoContoComponent {
  saldoContabile: number;

  constructor(private sc: SaldoContabileService) {
    this.saldoContabile = this.sc.getSaldoContabile();
  }
}
