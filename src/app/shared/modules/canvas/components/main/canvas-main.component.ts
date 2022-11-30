import { Component } from "@angular/core";

/*
* do your canvas work here
*/
@Component({
  selector: "app-canvas-main",
  templateUrl: "./canvas-main.component.html",
  styleUrls: ["./canvas-main.component.scss"],
})
export class CanvasMainComponent {
  public CANVAS_WIDTH: number = 528;
  public CANVAS_HEIGHT: number = 528;
  private context: any;
  canvas: any;

  getContext(c: any) {
    this.context = c.ctx;
    this.canvas = c.canvas;
  }

  constructor() {}

  ngAfterViewInit() {
    this.drawACircle();
    this.canvas.onmouseup = () => {
      alert('hi');
    }
    this.canvas.onmousedown = () => {}
    this.canvas.onmousemove = () => {}
    this.canvas.addEventListener('click', (event: any) => {});
    this.canvas.addEventListener('mousedown', (event: { clientX: number; clientY: number; }) => {});
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
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
