import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialMindmapComponent } from './tutorial-mindmap.component';

describe('TutorialMindmapComponent', () => {
  let component: TutorialMindmapComponent;
  let fixture: ComponentFixture<TutorialMindmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialMindmapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialMindmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
