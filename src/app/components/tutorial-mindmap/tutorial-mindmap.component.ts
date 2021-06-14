import { Component, OnInit } from '@angular/core';
import {TutorialService} from "../../services/tutorial.service";

@Component({
  selector: 'app-tutorial-mindmap',
  templateUrl: './tutorial-mindmap.component.html',
  styleUrls: ['./tutorial-mindmap.component.css']
})
export class TutorialMindmapComponent implements OnInit {
  email: any = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
  }

  retrieveTutorials(): void {
    this.tutorialService.findByOrder()
      .subscribe(
        data => {
          return data;
        },
        error => {
          console.log(error);
        });
  }
}
