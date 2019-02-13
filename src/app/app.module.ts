import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticlesModule } from 'angular-particle';
import { CountdownModule } from 'ngx-countdown';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IconComponent } from './icon/icon.component';
import { EventsComponent } from './events/events.component';
import { MegaEventsComponent } from './mega-events/mega-events.component';
import { LogosComponent } from './logos/logos.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { IntraComponent } from './intra/intra.component';

import { HomeService } from './services/home.service';
import { EventService } from './services/event.service';
import { MegaEventService } from './services/mega-event.service';
import { IntraEventService } from './services/intra-event.service';
import { HighlightsComponent } from './highlights/highlights.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IconComponent,
    EventsComponent,
    MegaEventsComponent,
    LogosComponent,
    SubEventsComponent,
    TeamComponent,
    SponsorsComponent,
    IntraComponent,
    HighlightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    CountdownModule,
    FontAwesomeModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    HomeService,
    EventService,
    MegaEventService,
    IntraEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){ }
}
