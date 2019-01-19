import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  items = [
    {name: "events/cyber-crusade.svg", class: "deg120", caption: "Cyber Crusade", id: 'cc'},
    {name: "events/innovati.svg", class: "deg143", caption: "Innovati", id: 'innovati'},
    {name: "events/money-matters.svg", class: "deg166", caption: "Money Matters", id: 'mm'},
    {name: "events/compute-aid.svg", class: "deg189", caption: "Compute@id", id: 'ca'},
    {name: "events/newron.svg", class: "deg212", caption: "Newron", id: 'newron'},
    {name: "events/elevation.svg", class: "deg235", caption: "Elevation", id: 'elevation'},
    {name: "events/robotics.svg", class: "deg258", caption: "Robotics", id: 'robotics'},
    {name: "events/food-for-fun.svg", class: "deg282", caption: "Food For Fun", id: 'fff'},
    {name: "events/create-it.svg", class: "deg305", caption: "Create It", id: 'create-it'},
    {name: "events/infocus.svg", class: "deg328", caption: "Infocus", id: 'infocus'},
    {name: "events/fun-events.svg", class: "deg351", caption: "Fun Events", id: 'fun'},
    {name: "events/just-like-that.svg", class: "deg14", caption: "Just Like That", id: 'jlt'},
    {name: "events/design-event.svg", class: "deg37", caption: "Designing", id: 'designing'},
    {name: "events/ciic.svg", class: "deg60", caption: "CIIC", id: 'ciic'}
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onEventClick(id: string){
    this.router.navigate(['/events', id]);
  }

}
