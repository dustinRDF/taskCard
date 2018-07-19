import { Component } from "@angular/core";

import { Task } from "./model/task";

@Component( {
  moduleId: module.id,
  selector: "my-app",
  styleUrls: [ "app.component.css" ],
  templateUrl: "app.component.html",
} )

export class AppComponent {
  private tasks: Task[] = [];
  private currentTask = new Task( null, false );

  public addTask(  ) {
    const task = new Task( this.currentTask.content, this.currentTask.completed );
    this.tasks.push( task );
    this.currentTask.content = null;
  }
}
