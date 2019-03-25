import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { IntraEventService } from '../services/intra-event.service';

@Component({
  selector: 'app-intra',
  templateUrl: './intra.component.html',
  styleUrls: ['./intra.component.scss']
})
export class IntraComponent implements OnInit {

  items = [
    {name: "events/cyber-crusade.svg", class: "deg45", caption: "Cyber Crusade", id: 'cc'},
    {name: "events/compute-aid.svg", class: "deg15", caption: "Compute@id", id: 'ca'},
    {name: "events/newron.svg", class: "deg345", caption: "Newron", id: 'newron'},
    {name: "events/elevation.svg", class: "deg315", caption: "Elevation", id: 'elevation'},
    {name: "events/robotics.svg", class: "deg135", caption: "Robotics", id: 'robotics'},
    {name: "events/food-for-fun.svg", class: "deg165", caption: "Food For Fun", id: 'fff'},
    {name: "events/create-it.svg", class: "deg195", caption: "Create It", id: 'ci'},
    {name: "events/infocus.svg", class: "deg225", caption: "Infocus", id: 'infocus'},
    {name: "events/ciic.svg", class: "deg270", caption: "CIIC Stage", id: 'ciic'}
  ];

  constructor(private router: Router, private ngxSmartModalService : NgxSmartModalService, private intraEventService: IntraEventService) { }

  ngOnInit() {
  }

  onEventClick(id: string) {
    if (id==='ciic'){
      const event = this.intraEventService.getDetails('ciic');
      this.ngxSmartModalService.resetModalData('myModal');
      this.ngxSmartModalService.setModalData(event['desc'], 'myModal');
      this.ngxSmartModalService.getModal('myModal').open();
      return;
    }
    this.router.navigate(['/intra', id]);
  }

  showResult() {
    const data = this.intraEventService.result;
    let result = '';
    data.map(event => {
      const heading = '<h1>'+event.name+'</h1>';
      let rows = '';
      event.events.map(subevent => {
        subevent.positions.map(position => {
          //const span = position.members.length;
          let members = '';
          position.members.map(member => {
            members += member + '<br>';
          });
          rows += `<tr>
                    <td>${subevent.name}</td>
                    <td>${position.pos}</td>
                    <td>${position.team}</td>
                    <td>${members}</td>
                  </tr>`
        });
      });
      const table = `<table class="result-table">${rows}</table>`;
      result += heading + table;
    });
    this.ngxSmartModalService.resetModalData('myModal');
    this.ngxSmartModalService.setModalData(`<div class="result-div">${result}</div>`, 'myModal');
    this.ngxSmartModalService.getModal('myModal').open();
  }
}
