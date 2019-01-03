import { Component, OnInit, Inject } from "@angular/core";
import { EventService } from "../../shared/events";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "event-detail",
  templateUrl: "./event-detail.component.html",
  styleUrls: ["./event-detail.component.css"]
})
export class EventDetailComponent implements OnInit {
  serviceEvent = new EventService();
  event: any;

  constructor(@Inject(ActivatedRoute) route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route, 909090);
    let id = this.route.snapshot.paramMap.get("id");
    /* this.event = this.serviceEvent.getEvent(
      +this.route.snapshot.paramMap.get("id")
    ); */
  }
}
