import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenubarComponent } from './components/menubar/menubar.component';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarComponent, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title: string = 'ibm-ng-app';



}
