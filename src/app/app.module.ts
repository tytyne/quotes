import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { KoteComponent } from "./kote/kote.component";
import { KoteDetailsComponent } from "./kote-details/kote-details.component";
import { StrikethroughDirective } from "./strikethrough.directive";
import { KoteFormComponent } from "./kote-form/kote-form.component";
import { DateCountPipe } from "./date-count.pipe";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    KoteComponent,
    KoteDetailsComponent,
    StrikethroughDirective,
    KoteFormComponent,
    DateCountPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
