import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Kote } from "../kote";
@Component({
  selector: "app-kote-form",
  templateUrl: "./kote-form.component.html",
  styleUrls: ["./kote-form.component.css"]
})
export class KoteFormComponent implements OnInit {
  newKote = new Kote(0, "", "", "", new Date(), 0, 0);
  @Output() addKote = new EventEmitter<Kote>();

  submitKote() {
    this.addKote.emit(this.newKote);
  }
  ngOnInit() {}
}
