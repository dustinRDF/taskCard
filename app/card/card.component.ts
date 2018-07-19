import { Component, Input } from "@angular/core";

import { Task } from "../model/task";

@Component( {
  moduleId: module.id,
  selector: "app-card",
  styleUrls: [ "card.component.css" ],
  templateUrl: "card.component.html",
} )

export class CardComponent {
  @Input()

  private task: Task;

  public statusToggle(  ) {
    this.task.completed = !this.task.completed;
  }
}
