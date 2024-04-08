import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TabMenuModule } from 'primeng/tabmenu';
import { PanelModule } from 'primeng/panel';
import { PrimeNGConfig } from 'primeng/api';
import { HomeComponent } from './components/home/home.component';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { ContanteComponent } from './components/contante/contante.component';
import { AssegniComponent } from './components/assegni/assegni.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EstrattoContoComponent,
    DepositoComponent,
    PrelievoComponent,
    ContanteComponent,
    AssegniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    PanelModule,
    ReactiveFormsModule,
    InputNumberModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private primeNGConfig: PrimeNGConfig) {
    this.primeNGConfig.ripple = true;
  }
}
