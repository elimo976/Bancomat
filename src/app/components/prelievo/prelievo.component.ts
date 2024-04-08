import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaldoContabileService } from 'src/app/services/saldo-contabile.service';

@Component({
  selector: 'app-prelievo',
  templateUrl: './prelievo.component.html',
  styleUrls: ['./prelievo.component.css']
})
export class PrelievoComponent {
  formGroup: FormGroup;
  saldoContabile: number = 6000;
  prelievoEffettuato: boolean = false;
  constructor(private formBuilder: FormBuilder, private sc: SaldoContabileService) {
    this.formGroup = this.formBuilder.group({
      value: [null]
    });
    this.saldoContabile = this.sc.getSaldoContabile();
  }

  updateTotal() {
    const newValue = this.formGroup.get('value')?.value;
    if (!newValue || isNaN(newValue)) {
      return;
    }
    const nuovoSaldo = this.saldoContabile - newValue;
    this.sc.setSaldoContabile(nuovoSaldo)
    this.saldoContabile -= newValue;
    this.prelievoEffettuato = true;
  }
}
