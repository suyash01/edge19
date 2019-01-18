import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MegaEventService {

  megaEvents = [{
    id: 'nights',
    desc: `<h1>Edge Nights</h1>
          <p>To Be Updated</p>`
  },
  {
    id: 'talks',
    desc: `<h1>Edge Talks</h1>
          <p>To Be Updated</p>`
  }]

  constructor() { }

  public getDescription(id: string){
    const detail = this.megaEvents.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
