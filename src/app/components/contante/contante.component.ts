import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SaldoContabileService } from 'src/app/services/saldo-contabile.service';

@Component({
  selector: 'app-contante',
  templateUrl: './contante.component.html',
  styleUrls: ['./contante.component.css']
})
export class ContanteComponent {
  formGroup: FormGroup;
  saldoContabile: number = 6000;
  depositoEffettuato: boolean = false;
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
    const nuovoSaldo = this.saldoContabile + newValue;
    this.sc.setSaldoContabile(nuovoSaldo)
    this.saldoContabile += newValue;
    this.depositoEffettuato = true;
  }
}
