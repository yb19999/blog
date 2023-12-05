import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-cto-p',
  templateUrl: './child-cto-p.component.html',
  styleUrls: ['./child-cto-p.component.css']
})
export class ChildCtoPComponent {
  @Output() updateDataevent = new EventEmitter<string>()
}
