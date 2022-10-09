import { Component, OnInit } from '@angular/core';
import { Config } from './models/config';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  readonly TITLE = 'Config Stash';
  configs: Config[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // 1. Initialize connection to database
    this.dataService.initialize();

    // 2. Grab all data and store as member variable
    this.configs = this.dataService.getConfigs();
    console.log('configs:', this.configs);
  }
}
