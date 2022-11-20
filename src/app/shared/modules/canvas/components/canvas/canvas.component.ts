import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { CanvasDirective } from '../../directives/canvas.directive';
import { CanvasContextService } from '../../services/context-element.service';


@Component({
  selector: 'app-canvas',
  template: `
    <canvas [width]="canvasWidth" [height]="canvasHeight" appcanvas></canvas>
  `,
  styles: ['canvas { border-style: solid  }']
})
export class CanvasComponent implements OnInit, OnChanges {

  @Input() canvasWidth!:number;
  @Input() canvasHeight!:number;
  @Output() appCanvas = new EventEmitter<any>();

  @ViewChild(CanvasDirective, {static: true}) appcanvas!: CanvasDirective;
  private context!: CanvasRenderingContext2D;

  constructor(private canvasContext:CanvasContextService) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  private initContext():void{
    this.context = this.canvasContext.initCanvas(this.appcanvas, '2d');
    this.appCanvas.emit(this.context);
  }

  ngOnInit(): void {
    this.initContext();
  }

}
