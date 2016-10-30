import {Component,Input,ElementRef} from '@angular/core';

let SpinnerJs = require('spin');

@Component({
  selector: 'spinner',
  template: `
  <span>
  </span>
  `
})
export class Spinner {
  spinner:any;
  @Input() lines; // The number of lines to draw
  @Input() length; // The length of each line
  @Input() width; // The line thickness
  @Input() radius; // The radius of the inner circle
  @Input() scale; // Scales overall size of the spinner
  @Input() corners; // Corner roundness (0..1)
  @Input() color; // #rgb or #rrggbb or array of colors
  @Input() opacity; // Opacity of the lines
  @Input() rotate; // The rotation offset
  @Input() direction; // 1: clockwise@Input() -1: counterclockwise
  @Input() speed; // Rounds per second
  @Input() trail; // Afterglow percentage
  @Input() fps; // Frames per second when using setTimeout() as a fallback for CSS
  @Input() zIndex; // The z-index (defaults to 2000000000)
  @Input() className; // The CSS class to assign to the spinner
  @Input() top; // Top position relative to parent
  @Input() left; // Left position relative to parent
  @Input() shadow; // Whether to render a shadow
  @Input() hwaccel; // Whether to use hardware acceleration
  @Input() position; // Element positioning
  @Input() stop; // Element positioning

  
  constructor(private myElement: ElementRef){
   
    
  }
  ngAfterViewInit(){
    let opts={
      lines:this.lines,
      length: length,
      width:this.width,
      radius:this.radius,
      scale:this.scale,
      corners:this.corners,
      color:this.color,
      opacity:this.opacity,
      rotate:this.rotate,
      direction:this.direction,
      speed:this.speed,
      trail:this.trail,
      fps:this.fps,
      zIndex:this.zIndex,
      className:this.className,
      top:this.top,
      left:this.left,
      shadow:this.shadow,
      hwaccel:this.hwaccel,
      position:this.position
    }
    for (var propName in opts) { 
      if (opts[propName] === null || opts[propName] === undefined) {
        delete opts[propName];
      }
    }
    console.log(opts);
    if(!this.stop){
        this.spinner = new SpinnerJs(opts).spin(this.myElement.nativeElement);

    }
    else{
      this.spinner = new SpinnerJs(opts).stop();
    }
    

  }
  ngOnChanges(){
    
  }

  
}
