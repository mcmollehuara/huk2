//////
import { Component, ViewEncapsulation } from '@angular/core';
import { AppConfig } from '../app.config';

//////
import { HomeService } from './services/home.service';
//////
import { GroupModel, ComponentModel } from "./model/index";

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.style.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent {
  config: any;
  list: Array<GroupModel> = new Array<GroupModel>();
  searchText: string;

  constructor(config: AppConfig, private homeService: HomeService) {
    this.config = config.getConfig();
  }

  ngOnInit(): void {
    this.homeService.getComponents().then(data => {
      this.list = data;
    });
  }
}
