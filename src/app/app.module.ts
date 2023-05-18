import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import {HttpClientModule} from '@angular/common/http';
import { FormatNumberPipe } from './pipes/format-number.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ActivatedRoute } from '@angular/router';
import { OurFirmComponent } from './our-firm/our-firm.component';
import { ServiciosLegalesComponent } from './servicios-legales/servicios-legales.component';
import { ServicesForForeignersComponent } from './services-for-foreigners/services-for-foreigners.component';
import { ColombiansAbroadComponent } from './colombians-abroad/colombians-abroad.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    FormatNumberPipe,
    NavBarComponent,
    OurTeamComponent,
    OurFirmComponent,
    ServiciosLegalesComponent,
    ServicesForForeignersComponent,
    ColombiansAbroadComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
