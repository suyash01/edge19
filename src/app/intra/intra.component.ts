import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intra',
  templateUrl: './intra.component.html',
  styleUrls: ['./intra.component.scss']
})
export class IntraComponent implements OnInit {

  items = [
    {name: "events/cyber-crusade.svg", class: "deg45", caption: "Cyber Crusade", id: 'cc'},
    {name: "events/compute-aid.svg", class: "deg15", caption: "Compute@id", id: 'ca'},
    {name: "events/newron.svg", class: "deg345", caption: "Newron", id: 'newron'},
    {name: "events/elevation.svg", class: "deg315", caption: "Elevation", id: 'elevation'},
    {name: "events/robotics.svg", class: "deg135", caption: "Robotics", id: 'robotics'},
    {name: "events/food-for-fun.svg", class: "deg165", caption: "Food For Fun", id: 'fff'},
    {name: "events/create-it.svg", class: "deg195", caption: "Create It", id: 'ci'},
    {name: "events/infocus.svg", class: "deg225", caption: "Infocus", id: 'infocus'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onEventClick(id: string) {
    this.router.navigate(['/intra', id]);
  }
}
