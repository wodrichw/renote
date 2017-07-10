import { Component, OnInit } from '@angular/core';

const classLinks: string[]  = [
  'http://doghousepolitics.com/',
  'http://save-cmlc.org/',
  'http://www.hellolorem.com/',
  'http://bourn.jonahgeorge.com/',
  'http://cookingtutorials.net/',
  'http://endeolion.com/'
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  links = classLinks;
  constructor() { }

  ngOnInit() {
  }

  generateLinkTitle(link: string): string{
    var title = link.slice(7, -5);
    return title;
  }

}
