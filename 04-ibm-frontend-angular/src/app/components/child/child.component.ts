import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  childData = 'Monu';

  @Input()
  parentDataInChild = '';

  @Output()
  sendToParent = new EventEmitter<any>();

  sendDataToParent = () => {
    console.log(this.childData);
    this.sendToParent.emit(this.childData);
  };

  @Output()
  myEvent = new EventEmitter<any>();

  sendData = () => { this.myEvent.emit('abc'); }

}
