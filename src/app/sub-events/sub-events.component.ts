import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../services/event.service';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-sub-events',
  templateUrl: './sub-events.component.html',
  styleUrls: ['./sub-events.component.scss']
})
export class SubEventsComponent implements OnInit {

  details = {}

  constructor(private route: ActivatedRoute, private eventService: EventService, private ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
    const event = this.route.snapshot.params.id;
    this.details = this.eventService.getDetails(event);
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
