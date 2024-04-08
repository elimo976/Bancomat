import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaldoContabileService } from 'src/app/services/saldo-contabile.service';

@Component({
  selector: 'app-assegni',
  templateUrl: './assegni.component.html',
  styleUrls: ['./assegni.component.css']
})
export class AssegniComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  saldoContabile: number = 6000;
  depositoEffettuato: boolean = false;

  constructor(private sc: SaldoContabileService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.formGroup = this.fb.group({
      campo1: ['', [Validators.required,Validators.pattern('[0-9]+')]],
      campo2: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]],
      campo3: ['', [Validators.required]],
      campo4: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      campo5: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      campo6: ['', [Validators.required, Validators.pattern('^[A-Za-z0-9 ]+$')]],
      campo7: ['', [Validators.required, Validators.pattern('^[0-9a-zA-Z]+$')]]
    });

    this.saldoContabile = this.sc.getSaldoContabile();
  }
  depositaButton(): void {
    if (this.formGroup.valid) {
      this.updateTotal()
    }
  }
  updateTotal() {
    const newValue = parseFloat(this.formGroup.get('campo1')?.value);
    if (isNaN(newValue)) {
      return;
    }
    const nuovoSaldo = this.saldoContabile + newValue;
    this.sc.setSaldoContabile(nuovoSaldo);
    this.saldoContabile = nuovoSaldo;
    this.depositoEffettuato = true;
  
  }
}
