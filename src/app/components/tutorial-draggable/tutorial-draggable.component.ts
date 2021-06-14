import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import { TutorialService } from 'src/app/services/tutorial.service';
import { Tutorial } from 'src/app/models/tutorial.model';

@Component({
  selector: 'app-tutorial-draggable',
  templateUrl: './tutorial-draggable.component.html',
  styleUrls: ['./tutorial-draggable.component.css']
})
export class TutorialDraggableComponent implements OnInit {

  message?: string;
  tutorials?: Tutorial[];
  currentTutorial: Tutorial = {};
  currentIndex = -1;
  title = '';
  tutArray: any[] = [];

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tutArray, event.previousIndex, event.currentIndex);
    this.updateOrderInDb(this.tutArray)
    this.message = "Succesfully moved";
  }

  retrieveTutorials(): void {
    this.tutorialService.findByOrder()
      .subscribe(
        data => {
          this.turnIntoArray(data);
        },
        error => {
          console.log(error);
        });
  }

  turnIntoArray(data: Tutorial[]): void {
    data.forEach((item) => {
      if (item) {
        this.tutArray.push({'id': item.id, 'title': item.title});
      }
    });
  }

  updateOrderInDb(tutorials: Tutorial[]): void {
    tutorials.forEach((tutorial, index) => {
      this.tutorialService.update(tutorial.id, {order: index}).subscribe();
    });
  }

  showMessage(): string {
    return <string>this.message;
  }
}
