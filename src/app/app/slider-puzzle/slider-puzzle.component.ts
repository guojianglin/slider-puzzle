import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
declare var jigsaw;
@Component({
  selector: 'app-slider-puzzle',
  templateUrl: './slider-puzzle.component.html',
  styleUrls: ['./slider-puzzle.component.scss']
})
export class SliderPuzzleComponent implements OnInit {

  @ViewChild('container', {static: true}) container: ElementRef;
  @Input() width = 310;
  @Input() height = 155;
  @Output() sliderResult = new EventEmitter();
  constructor() { }

  ngOnInit() {
    jigsaw.init({
      el: this.container.nativeElement,
      width: this.width, // 可选, 默认310
      height: this.height, // 可选, 默认155
      onSuccess: this.handleSuccess,
      onFail: this.handleFail,
      onRefresh: this.handleRefresh
    });
  }

  // tslint:disable-next-line: use-lifecycle-interface
  // ngAfterViewInit(): void {
  //   jigsaw.init({
  //     el: this.container.nativeElement,
  //     width: 310, // 可选, 默认310
  //     height: 155, // 可选, 默认155
  //     onSuccess: this.handleSuccess,
  //     onFail: this.handleFail,
  //     onRefresh: this.handleRefresh
  //   });
  // }

  handleSuccess() {
    this.sliderResult.emit(true);
  }

  handleFail() {
    this.sliderResult.emit(false);
  }

  handleRefresh() {
    this.sliderResult.emit('wait for a min');
  }

}
