import { Component, OnInit } from "@angular/core";
import { Kote } from "../kote";

@Component({
  selector: "app-kote",
  templateUrl: "./kote.component.html"
})
export class KoteComponent implements OnInit {
  kotes = [
    new Kote(
      1,

      "You can always edit a bad page. You can’t edit a blank page.",
      "flora",
      "eddy",
      new Date(2018, 3, 14),
      0,
      0
    ),
    new Kote(
      2,

      "Start writing, no matter what. The water does not flow until the faucet is turned on.",
      "sarah",
      "helene",
      new Date(2018, 6, 9),
      0,
      0
    ),
    new Kote(
      3,

      "Don’t tell me the moon is shining; show me the glint of light on broken glass",
      "john legend",
      "casim casimir",
      new Date(2018, 1, 12),
      0,
      0
    ),
    new Kote(
      4,

      "Everybody walks past a thousand story ideas every day.",
      "camillia",
      "Broken writer",
      new Date(2018, 0, 18),
      0,
      0
    ),
    new Kote(
      5,

      "I think all writing is a disease. You can’t stop it",
      "david adams",
      "Damn pablo",
      new Date(2018, 2, 14),
      0,
      0
    ),
    new Kote(
      6,

      "A l'absence de ce qu'on aime on aime ce qu'on a",
      "frank",
      "frederick",
      new Date(2018, 3, 14),
      0,
      0
    )
  ];

  // toogleDetails(index) {
  //   this.kotes[index].showDescription = !this.kotes[index].showDescription;
  // }

  upvote(index) {
    this.kotes[index].upvotes++;
  }
  downvote(index) {
    this.kotes[index].downvotes++;
  }

  completeKote(isComplete, index) {
    if (isComplete) {
      this.kotes.splice(index, 1);
    }
  }

  deleteKote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.kotes[index].name}`
      );

      if (toDelete) {
        this.kotes.splice(index, 1);
      }
    }
  }

  addNewKote(kote) {
    let koteLength = this.kotes.length;
    kote.id = koteLength + 1;
    kote.completeDate = new Date(kote.completeDate);
    this.kotes.push(kote);
  }

  constructor() {}
  ngOnInit() {}
}
