import { Component, OnInit } from '@angular/core';
import { faHouseChimney, faMessage, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  faHouseChimney = faHouseChimney;
  faMessage = faMessage;
  faCircleInfo =faCircleInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
