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
    desc: `<h1>Merchandise</h1>
          <p>The official EDGE'19 merchandise T-Shirts are up for grabs. Suit up in the Geek Armour and flaunt the legacy that is EDGE.</p>
          <p>Priced at INR 230 each.</p>
          <p>Become a part of the GEEKONIX family by participating in the new daily Quiz competition and avail exciting discounts.</p>
          <ol>
            <li>From 3rd February onwards every day 3 questions will be posted online. You get INR 10 off for each question you answer correctly.</li>
            <li>Three lucky winners will be selected everyday from the people who have participated in the quiz that day and their winnings will be doubled.( Applicable for the first 15 days from 3rd February).</li>
            <li>The questions will be posted at 9:30 am everyday and will be valid till 9:30pm of that day.</li>
            <li>The answers and the three lucky winners will be announced at 10pm.</li>
            <li>You need to pre-book the merchandise t-shirt with INR 100, then only you can participate in the quiz and further avail the discounts you've won via the quiz.</li>
            <li>Only 1 merchandise t-shirt can be availed by participating in a single day's quiz.</li>
          </ol>
          <br>
          <img src="/assets/merch-white.jpeg" alt="Merchandise">
          <img src="/assets/merch-black.jpeg" alt="Merchandise">
          <br>
          <p><b>Hurry up & suit up in your geek armour!</b></p>`
  },
  {
    id: 'accomodation',
    desc: `<h1>Accomodation</h1>
          <p>Accomodation is being made available for participants from outside Kolkata, on a first-come-first-serve basis. If you want to avail accomodation please fill up the form here. If you have any questions regarding the same, please contact the undersigned.</p>
          <br>
          <h3>Contact</h3>
          <p>Siddharth Verma - 7688080223</p>`
  },
  {
    id: 'reg',
    desc: `<h1>Schedule & Registration</h1>
          <p>To Be Updated</p>`
  },
  {
    id: 'contact',
    desc: `<h1>Contact</h1>
          <p>For queries related to events contact the respective event co-ordinators whose contats are given on the respective event pages.</p>
          <br>
          <p>Email: <a href="mailto:geekonix@gmail.com">geekonix@gmail.com</a></p>
          <p>Chandrasekhar Upadhyay - 9038606282</p>
          <p>Shatavisha Biswas - 9748017460</p>
          <br>
          <h3>Sponsorship Contacts:</h3>
          <p>Ritaban Chakrabarti - 8444825573</p>
          <p>Rohan Choudhury - 9331556687</p>`
  },
  {
    id: 'ca',
    desc: `<h1>Campus Ambasador</h1>
          <img src="/assets/ca.jpg" alt="Campus Ambassador">
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
  },
  {
    id: 'deeds',
    desc: `<h1>Edge Deeds</h1>
          <h2>Phase 1 - Friend In Need<br><small>20th - 24th August, 2018</small></h2>
          <p>During the first phase of EDGE DEEDS the Geekonix family extended their helping hand towards the unfortunate people stricken by the floods in Kerala. An amount exceeding INR 50,000 was donated towards the betterment of those affected by the floods. The noble initiative saw participation from over 350 kindred souls.</p>
          <h2>Phase 2 - Visit A Friend<br><small>4th week of February, 2019</small></h2>
          <p>True kindness lies within the act of giving' and the greatest gift you can give is by lending a helping hand. So join us in the second phase of EDGE Deeds where we help those who have been unfortunate enough to be left in this world to fend for themselves without a hand to protect and guide them. So we will visit an orphanage to engage and support them in this tumultuous journey of life.</p>
          <h2>Phase 3 - Walkathon: March Against Alcohol and Drug Abuse<br><small>23rd March, 2019</small></h2>
          <p>A nation can prosper only when it's youth is free from any shackles and can pursue their dreams. The strongest opposition to this is the ever-increasing substance abuse in today's youth. Geekonix believes that spreading awareness about the same is quintessential to help the society abstain from such vices. With this aim in view, team Geekonix is organizing a Walkathon- A walk to let the society know the right from wrong, a walk to keep ourselves ​away from such vices.</p>`
  }]

  constructor() { }

  getDescription(id: string){
    const detail = this.home.find((d) => {
      return d.id === id;
    });
    return detail.desc;
  }
}
