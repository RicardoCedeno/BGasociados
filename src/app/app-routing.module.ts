import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { OurFirmComponent } from './our-firm/our-firm.component';
import { ServiciosLegalesComponent } from './servicios-legales/servicios-legales.component';
import { ServicesForForeignersComponent } from './services-for-foreigners/services-for-foreigners.component';

const routes: Routes = [
  {path:'inicio', component:HomeComponent},
  {path: 'nuestro-equipo', component: OurTeamComponent},
  {path:'nuestra-firma', component:OurFirmComponent},
  {path: 'servicios-legales', component:ServiciosLegalesComponent},
  {path:'servicios-para-extranjeros', component:ServicesForForeignersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
