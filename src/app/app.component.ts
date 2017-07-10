import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  opts: any;
  title = 'Renote';
  subtitle = 'Convert Handwriting to Text with Ease!'

  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics){}
};
