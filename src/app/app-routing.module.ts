import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { MegaEventsComponent } from './mega-events/mega-events.component';
import { SubEventsComponent } from './sub-events/sub-events.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'events', component:EventsComponent},
  {path:'mega-events', component:MegaEventsComponent},
  {path:'events/:id', component:SubEventsComponent},
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'**', redirectTo:'/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
