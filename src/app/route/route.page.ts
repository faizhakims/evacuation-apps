import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-route',
  templateUrl: './route.page.html',
  styleUrls: ['./route.page.scss'],
})
export class RoutePage implements OnInit {
  distance: number =100;
  direction: string = "forward";
  constructor() { }

  ngOnInit() {
  }

  updateRoute(newDistance: number, newDirection: string) {
    this.distance = newDistance;
    this.direction = newDirection;
  }
}
