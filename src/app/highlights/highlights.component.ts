import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.scss']
})
export class HighlightsComponent implements OnInit {

  images = [];
  items = 21;

  constructor() {
    for(let i=0;i<this.items/3;i++) {
      let row = [];
      for(let j=0;j<3;j++)
        row.push(3*i+j+1);
      this.images.push(row);
    }
    console.log(this.images);
  }

  ngOnInit() {
  }

}
