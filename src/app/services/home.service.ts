import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  home = [{
    id: 'about',
    desc: `<h1>Techno Main Salt Lake</h1>
          <p><b>Techno India</b> is an engineering and management college located in West Bengal. Established in 2001 by the Techno India group, it offers both undergraduate and postgraduate courses in various engineering, computer and business disciplines. The college is AICTE approved institution affiliated to West Bengal University of technology. Since its inception, TIG group has strengthened its original emphasis on science and engineering and expanded into management and various other areas.</p>
          <h1>Geekonix</h1>
          <p><b>Geekonix</b> is the official science and technology society of Techno India, Salt Lake. It was formed back in 2004-2005 with the sole purpose of providing students with opportunities for enhancing their creativity and developing a pathway for exposure for the students zealous in the technical field. Under Geekonix we have various clubs like Robotics Robopalz Club (RRC), Curbrain and many more. With time, Geekonix has grown into a centre of innovation and technical expertise.
          <h1>Edge</h1>
          <p><b>Edge</b> - The annual technical and management festival of Techno India salt lake, organised by the members of its official science club Geekonix, is a marvel in itself. It was first conducted in the year 2007 and is now one of the largest technical fests of the region par excellence. It is a three-day long festival encompassing a wide range of events with prize money of up to 7 lakhs and witnesses the largest footfall in the region with participants from all over the country. Edge hosts an array of over 40 events under the categories: Robotics, Cyber Crusade (Gaming), Compute Aid, Newron, Infocus, Elevation, Money Matters, Food for fun, Innovati and other fun events; among which Gaming and Robotics acquire the foremost position. After eleven successful years that saw promising talents and immense reception, this time EDGE’18 is set to break all the boundaries and promises to be the unprecedented celebration of budding talent, technical excellence and innovative minds.`
  },
  {
    id: 'merch',
    desc: `<h1>Merchandise</h1>`
  },
  {
    id: 'sponsors',
    desc: `<h1>Sponsors</h1>`
  },
  {
    id: 'accomodation',
    desc: `<h1>Accomodation</h1>`
  },
  {
    id: 'reg',
    desc: `<h1>Schedule & Registration</h1>`
  },
  {
    id: 'ca',
    desc: `<h1>Campus Ambasador</h1>
          <img src="/assets/ca.jpg" alt="Campus Ambassador" style="max-width: 500px; height: auto; width: 100%">
          <p>We welcome you to be a part of the family and witness the technical extravaganza.</p>
          <p>Represent your college by signing up for the Campus Ambassador Programme for EDGE'19.</p>
          <h3>Requirements for being a CA:</h3>
          <ul>
            <li>Excellent communication skills.</li>
            <li>Wide outreach in his/her college.</li>
            <li>Responsible enough to handle the tasks assigned.</li>
          </ul>
          <h3>Incentives for the CA:</h3>
          <ul>
            <li>Certificate of appreciation authenticating your work as a CA from Geekonix.</li>
            <li>Platform to enhance your soft skills.</li>
            <li>Early Bird offers for EDGE'19 merchandise.</li>
            <li>Exciting goodies for the top 3 CAs.</li>
            <li>Reduction in the participation fee of any one event at EDGE'19 for the first 10 CAs.</li>
            <li>Opportunity to avail free online courses from NIIT for top 10 CAs.</li>
            <li>Linkedin endorsment from Geekonix for top 10 CAs.</li>
          </ul>
          <p><a href="https://goo.gl/forms/R812DlOypjMBxR272">Click here to register</a></p>
          <h3>Contacts:</h3>
          <p>Radhika Mohta : +91 9163981049</p>
          <p>Amritaparna Pal : +91 9531733733</p>
          <p>Once you are selected as the CA, we shall notify you via mail.</p>`
  }]

  constructor() { }

  getDescription(id: string){
    const detail = this.home.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
