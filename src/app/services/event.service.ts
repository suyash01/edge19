import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events = [{
    id: 'ca',
    icon: 'compute-aid.svg',
    subEvents: [{
      id: 'flawless',
      name: 'Flawless',
      icon: 'events/compute-aid/flawless.svg',
      class: 'deg0',
      desc: `<h1>Flawless</h1>`
    },
    {
      id: 'bughunt',
      name: 'Bug Hunt',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg180',
      desc: `<h1>Bug Hunt</h1>`
    }]
  },
  {
    id: 'robotics',
    icon: '',
    subEvents: [{
      id: 'roborace',
      name: 'Robo Race',
      icon: '',
      class: '',
      desc: ``
    }]
  }]

  constructor() { }

  public getDetails(id: string){
    const details = this.events.find((d) => {
      return d.id === id;
    });
    
    return details;
  }
}
