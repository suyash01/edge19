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
      desc: `<h1>Flawless</h1>
            <p>If coding is your passion and whenever you see a problem you cannot wait to get down to code it, then this is the perfect event for you. Code your heart out and race with the others to win the battle of wits and will. Be Flawless!</p>`
    },
    {
      id: 'bughunt',
      name: 'Bug Hunt',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg30',
      desc: `<h1>Bug Hunt</h1>`
    },
    {
      id: 'crypto',
      name: 'Cryptoquest',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg330',
      desc: `<h1>CryptoQuest</h1>`
    },
    {
      id: 'codeout',
      name: 'CodeOut',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg180',
      desc: `<h1>CodeOut</h1>`
    },
    {
      id: 'code-relay',
      name: 'Code Relay',
      icon: 'events/compute-aid/bug-hunt.svg',
      class: 'deg150',
      desc: `<h1>Code Relay</h1>`
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
  },
  {
    id: 'infocus',
    icon: 'infocus.svg',
    subEvents: [{
      id: 'shoot-m-up',
      name: 'Shoot-M-Up',
      icon: 'events/infocus/shoot-m-up.svg',
      class: 'deg0',
      desc: `<h1>Shoot-M-Up</h1>
            <p>In this live photography competition you need to think on your feet and be creative at the same time. This mobile photography competition where your photographic skills combined with creative approach and innovative ideas can bag you the first prize.</p>`
    },
    {
      id: 'insta-edit',
      name: 'Insta-Edit',
      icon: 'events/infocus/insta-edit.svg',
      class: 'deg30',
      desc: `<h1>Insta-Edit</h1>
            <p>INSTA-EDIT is an editing competition where your creative mind blends perfectly with your Photoshop skills to create your masterpiece and who knows, you might bag the first prize</p>`
    },
    {
      id: 'insta-click',
      name: 'Insta-Click',
      icon: 'events/infocus/insta-click.svg',
      class: 'deg330',
      desc: `<h1>Insta-Click</h1>
            <p>A Live Event photography competition that will measure your creativity as well as innovative approach to photography.The best and the most extraordinary photograph clicked on the event day gets awarded.</p>`
    },
    {
      id: 'crumbs',
      name: 'Crumbs',
      icon: 'events/infocus/crumbs.svg',
      class: 'deg160',
      desc: `<h1>Crumbs</h1>
            <p>Showcase your skills to win the prize in an event that will put your creativity and talent to the test.</p>`
    },
    {
      id: 'odyssey',
      name: 'Odyssey',
      icon: 'events/infocus/odyssey.svg',
      class: 'deg200',
      desc: `<h1>Odyssey</h1>
            <p>If film making is what intrigues you, then this is the event for you. You stand the chance of getting recognition from stalwarts of the film industry.</p>`
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
