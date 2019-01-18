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
    {name: "events/innovati.svg", class: "deg143", caption: "Innovati"},
    {name: "events/money-matters.svg", class: "deg166", caption: "Money Matters"},
    {name: "events/compute-aid.svg", class: "deg189", caption: "Compute@id", id: 'ca'},
    {name: "events/newron.svg", class: "deg212", caption: "Newron"},
    {name: "events/elevation.svg", class: "deg235", caption: "Elevation"},
    {name: "events/robotics.svg", class: "deg258", caption: "Robotics", id: 'robotics'},
    {name: "events/food-for-fun.svg", class: "deg282", caption: "Food For Fun"},
    {name: "events/create-it.svg", class: "deg305", caption: "Create It"},
    {name: "events/infocus.svg", class: "deg328", caption: "Infocus"},
    {name: "events/fun-events.svg", class: "deg351", caption: "Fun Events"},
    {name: "events/just-like-that.svg", class: "deg14", caption: "Just Like That"},
    {name: "events/design-event.svg", class: "deg37", caption: "Designing"},
    {name: "events/ciic.svg", class: "deg60", caption: "CIIC"}
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  onEventClick(id: string){
    this.router.navigate(['/events', id]);
  }

}
