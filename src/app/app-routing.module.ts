import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MegaEventsComponent } from './mega-events/mega-events.component';
import { SubEventsComponent } from './sub-events/sub-events.component';
import { TeamComponent } from './team/team.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { IntraComponent } from './intra/intra.component';
import { HighlightsComponent } from './highlights/highlights.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'events', component:EventsComponent},
  {path:'mega-events', component:MegaEventsComponent},
  {path:'events/:id', component:SubEventsComponent},
  {path:'intra', component:IntraComponent},
  {path:'intra/:id', component:SubEventsComponent},
  {path:'team', component:TeamComponent},
  {path:'sponsors', component:SponsorsComponent},
  {path:'highlights', component:HighlightsComponent},
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
