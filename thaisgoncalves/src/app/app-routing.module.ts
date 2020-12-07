import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurriculoComponent } from './curriculo/curriculo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
{path: 'curriculo', component: CurriculoComponent},
{path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
