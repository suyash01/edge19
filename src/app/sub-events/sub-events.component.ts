import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { IntraEventService } from '../services/intra-event.service';

@Component({
  selector: 'app-sub-events',
  templateUrl: './sub-events.component.html',
  styleUrls: ['./sub-events.component.scss']
})
export class SubEventsComponent implements OnInit {

  details = {}

  constructor(private route: ActivatedRoute, private eventService: EventService, private ngxSmartModalService: NgxSmartModalService, private intraEventService: IntraEventService) { }

  ngOnInit() {
    const from = this.route.snapshot.url[0].path;
    const event = this.route.snapshot.params.id;
    if (from === 'events')
      this.details = this.eventService.getDetails(event);
    else if (from === 'intra')
      this.details = this.intraEventService.getDetails(event);
  }

  openModal(id: string){
    const subEvent = this.details['subEvents'].find((d) => {
      return d.id === id;
    });
    this.ngxSmartModalService.resetModalData('myModal');
    this.ngxSmartModalService.setModalData(subEvent.desc, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }

}
