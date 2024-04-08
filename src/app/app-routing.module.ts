import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EstrattoContoComponent } from './components/estratto-conto/estratto-conto.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { PrelievoComponent } from './components/prelievo/prelievo.component';
import { ContanteComponent } from './components/contante/contante.component';
import { AssegniComponent } from './components/assegni/assegni.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: 'estratto-conto', component: EstrattoContoComponent },
      { path: 'deposito', component: DepositoComponent, children: [
        { path: 'contante', component: ContanteComponent },
        { path: 'assegni', component: AssegniComponent}
      ]},
      { path: 'prelievo', component: PrelievoComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
