import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-collapse-with-title',
  templateUrl: './collapse-with-title.component.html',
  styleUrls: ['./collapse-with-title.component.scss']
})
export class CollapseWithTitleComponent {

  @Input() titleForClose: string;
  @Input() titleForOpen: string;
  @Input() collapsed = true;

  @Output() collapseChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeCollapseStatus() {
    this.collapseChanged.emit(!this.collapsed);
  }
}
