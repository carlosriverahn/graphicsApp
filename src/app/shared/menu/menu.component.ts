import { Component, OnInit } from '@angular/core';

interface MenuItem {
  route: string;
  text: string
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  menu: MenuItem[] = [
    {
      route: './graphics/bars',
      text: 'Bars'
    },

    {
      route: './graphics/double-bar',
      text: 'Double-bar'
    },

    {
      route: './graphics/donuts',
      text: 'Donuts'
    },

    {
      route: './graphics/donuts-http',
      text: 'Donuts-http'
    },
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
