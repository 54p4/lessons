import { Component, OnInit, ViewChild, ElementRef, OnDestroy, NgZone } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  constructor(private ngZone: NgZone) { }

  @ViewChild('gmCnv')
  gmCnv: ElementRef;
  context: any;
  private running: boolean;

  hanzi = ['寒い', '広い', '狭い', '明るい', '青い', '白い', '黒い', '暗い', '闇', '楽しい', '嬉しい', '悲しい', '辛い', '甘い', '臭い', '苦い', '緑', '赤い', '紺'];
  dx = 0;
  indx = 0;
  ngOnInit() {
    this.running = true;
    this.ngZone.runOutsideAngular(() => this.paint());

  }

  paint() {

    if (!this.running) {
      return;
    }


    const context: CanvasRenderingContext2D =
      this.gmCnv.nativeElement.getContext('2d');

    context.clearRect(0, 0, 1200, 600);
    context.font = '48px serif';
    if (this.indx >= this.hanzi.length) {
      this.indx = 0;
    }
    const id = this.indx;
    const x = this.dx + 3;

    context.fillText(this.hanzi[id], x, 300, 2000);
    this.dx = x;
    if (this.dx > 1200) {

      this.indx = id + 1;
      this.dx = 0;
    }


    requestAnimationFrame(() => this.paint());
  }

  ngOnDestroy() {
    this.running = false;
  }

}
