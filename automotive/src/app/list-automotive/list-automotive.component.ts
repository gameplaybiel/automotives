import { Component, OnInit } from '@angular/core';
import { Automotive } from '../automotive';
import { AutomotiveService } from '../automotive.service';

@Component({
  selector: 'app-list-automotive',
  templateUrl: './list-automotive.component.html',
  styleUrls: ['./list-automotive.component.css']
})
export class ListAutomotiveComponent implements OnInit {
  automotive: Automotive[] = [];
  newAutomotive: any = {};

  constructor(private automotiveService: AutomotiveService) { }

  ngOnInit(): void {
    this.getAutomotive();
  }

  getAutomotive(){
    this.automotiveService.getAutomotive().subscribe((data: any) => {
      this.automotive = data._embedded.automotiveList
    })
  }

}
