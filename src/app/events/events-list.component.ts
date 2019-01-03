import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/events";

@Component({
  selector: "events-list",
  templateUrl: "./events-list.component.html",
  styleUrls: ["./events-list.component.css"]
})
export class EventsListComponent implements OnInit {
  events: any[];
  private service: EventService = new EventService();
  /*constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }*/
  constructor() {}

  ngOnInit() {
    this.events = this.service.getEvents();
  }
}
