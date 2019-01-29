import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Kote } from "../kote";

@Component({
  selector: "app-kote-details",
  templateUrl: "./kote-details.component.html",
  styleUrls: ["./kote-details.component.css"]
})
export class KoteDetailsComponent implements OnInit {
  @Input() kote: Kote;
  @Output() isComplete = new EventEmitter<boolean>();

  koteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  koteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() {}

  ngOnInit() {}
}
