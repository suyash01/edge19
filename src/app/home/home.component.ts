import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { HomeService } from '../services/home.service';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent implements OnInit {

  items = [
    {name: "home/events.svg", class: "deg30", caption: "Events", link: "/events"},
    {name: "home/mega-event.svg", class: "deg150", caption: "Mega Events", link: "/mega-events"},
    {name: "mega-events/edge-deeds.svg", class: "deg180", caption: "Edge Deeds", id: 'deeds'},
    {name: "home/events.svg", class: "deg0", caption: "Intra", id: 'intra'},
    {name: "home/events.svg", class: "deg210", caption: "Highlights", link: "/highlights"},
    {name: "home/about-us.svg", class: "deg330", caption: "About Us", id: 'about'}
  ];
  
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInsta = faInstagram;
  faYT = faYoutube;

  constructor(private ngxSmartModalService: NgxSmartModalService, private homeService: HomeService) { }

  ngOnInit(){ }

  openModal(id: string){
    if(id==='intra')
      window.location.href = 'http://intra.edg.co.in';
    const desc = this.homeService.getDescription(id);
    this.ngxSmartModalService.resetModalData('myModal');
    this.ngxSmartModalService.setModalData(desc, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }
}
