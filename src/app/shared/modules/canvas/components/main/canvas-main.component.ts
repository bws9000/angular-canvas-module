import { Component, OnInit } from "@angular/core";

/*
* do your canvas work here
*/
@Component({
  selector: "app-canvas-main",
  templateUrl: "./canvas-main.component.html",
  styleUrls: ["./canvas-main.component.scss"],
})
export class CanvasMainComponent implements OnInit {
  public CANVAS_WIDTH: number = 528;
  public CANVAS_HEIGHT: number = 528;
  private context: any;

  getContext(context: Event) {
    this.context = context;
  }

  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.drawACircle();
  }

  drawACircle(): void {
    const centerX = this.CANVAS_WIDTH / 2;
    const centerY = this.CANVAS_HEIGHT / 2;
    const radius = 30;
    this.context.beginPath();
    this.context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    this.context.fillStyle = 'red';
    this.context.fill();
    this.context.lineWidth = 1;
    this.context.strokeStyle = '#000000';
    this.context.stroke();
  }
}
