import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
} from '@angular/core';

declare const videojs: any;
@Component({
  selector: 'app-hls-video',
  standalone: true,
  imports: [],
  templateUrl: './hls-video.component.html',
  styleUrl: './hls-video.component.css'
})
export class HlsVideoComponent implements OnInit, AfterViewInit {

  private player: any;
  // constructor initializes our declared vars
  constructor(elementRef: ElementRef) {
    // this.url = false;
    this.player = false;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    const self = this;
    this.player = videojs(document.getElementById('hlsvideo'));
    console.log(this.player);
    this.player.muted(true);
    this.player.on('timeupdate', () => {
      let hasDVR = false;
      let duration = Math.floor(this.getDuration(this.player) * 1000);
      let time;
      let seekPercent;
      console.log(this.player.currentTime(), this.getDuration(this.player));
    });
  }

  getDuration(player:any) {
    var seekable = player.seekable();
    return seekable && seekable.length
      ? seekable.end(0) - seekable.start(0)
      : 0;
  }

  ngOnDestroy() {}

  destroy() {}

}
