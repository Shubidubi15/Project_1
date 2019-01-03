import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { EventsListComponent } from "./events/events-list.component";
import { EventThumbnailComponent } from "./event-thumbnail/event-thumbnail.component";
import { NavbarComponent } from "./nav/navbar.component";
import { EventService } from "./shared/events";
import { EventDetailComponent } from "./events/event-detail/event-detail.component";
import { appRoutes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule {}
