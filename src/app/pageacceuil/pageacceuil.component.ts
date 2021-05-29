import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pageacceuil',
  templateUrl: './pageacceuil.component.html',
  styleUrls: ['./pageacceuil.component.css']
})
export class PageacceuilComponent implements OnInit {




  public isCollapsed1 = true;
  public isCollapsed2 = true;
  public isCollapsed3 = true;

  constructor() { }

  ngOnInit(): void {
  }

}
