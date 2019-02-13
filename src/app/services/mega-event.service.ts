import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MegaEventService {

  megaEvents = [{
    id: 'nights',
    desc: `<h1>Edge Nights</h1>
          <br>
          <p>To add up to all of the extravaganzas of EDGE, we have the star night. The vibrant life of those few hours, the captivating speeches, pleasant interactions and amusing stage performances usher in an unprecedented medley of excitement and zeal. EDGE NIGHT promises to be a perfect fusion of innovative ideas and enthusiasm.</p>
          <br>
          <p>Stay tuned for updates...</p>`
  },
  {
    id: 'talks',
    desc: `<h1>Edge Talks</h1>
          <br>
          <p>"When all think alike, then no one is thinking”. EDGE Talks promise to be bigger, better and our speakers are ready with their inspiration packed talks, waiting to blow your minds. Because it's not about ideas, it's about making ideas happen! We here aim at holistic experiences and engaging opportunities to be the next generation of change makers. It brings the top-of-the-mind concerns of millennials to the fore, stimulating substantial conversations. As a forum for open expression and the healthy questioning of established ideas and notions.</p>
          <br>
          <p>Stay tuned for updates...</p>`
  }]

  constructor() { }

  public getDescription(id: string){
    const detail = this.megaEvents.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
