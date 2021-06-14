import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDraggableComponent } from './tutorial-draggable.component';

describe('TutorialDraggableComponent', () => {
  let component: TutorialDraggableComponent;
  let fixture: ComponentFixture<TutorialDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialDraggableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
