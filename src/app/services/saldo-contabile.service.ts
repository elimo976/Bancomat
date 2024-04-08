import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaldoContabileService {
  private saldoContabile: number = 6000;

  constructor() { }

  getSaldoContabile(): number {
    return this.saldoContabile;
  }
  setSaldoContabile(saldoContabile: number): void {
    if (saldoContabile < 0) {
      alert("Impossibile effettuare il prelievo!");
      return;
    } else {
      this.saldoContabile = saldoContabile;
    }
  }
}
