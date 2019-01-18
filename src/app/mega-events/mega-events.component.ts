import { Component, OnInit } from '@angular/core';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { MegaEventService } from '../services/mega-event.service';

@Component({
  selector: 'app-mega-events',
  templateUrl: './mega-events.component.html',
  styleUrls: ['./mega-events.component.scss']
})
export class MegaEventsComponent implements OnInit {

  items = [
    {name: "mega-events/edge-night.svg", class: "deg0", caption: "Edge Nights", id: 'nights'},
    {name: "mega-events/edge-talks.svg", class: "deg180", caption: "Edge Talks", id: 'talks'}
  ];

  constructor(private ngxSmartModalService: NgxSmartModalService, private megaEventService: MegaEventService) { }

  ngOnInit() {
  }

  openModal(id: string){
    const desc = this.megaEventService.getDescription(id);
    this.ngxSmartModalService.resetModalData('myModal');
    this.ngxSmartModalService.setModalData(desc, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
