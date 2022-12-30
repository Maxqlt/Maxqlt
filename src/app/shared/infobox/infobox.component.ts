import { state, style, trigger, transition, animate, group, query, animateChild, keyframes } from '@angular/animations';
import {  Component, Input} from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.css'],
  animations:[
    trigger('collapsable', [
      state('normal', style({
        'height': '10em',
        'opacity': 1
      })),
      state('collapsed',
        style({
          'height':'3.5em',
      })),
      transition('normal <=> collapsed', [
        group([
          query('@childanimation', animateChild()),
          animate(300)
        ]),
      ]),
      transition('void => collapsed', animate(0))
    ]),
    trigger('childanimation', [
      state('normal', style({
        'opacity': 1,
        transform: 'translateY(0px)',
      })),
      state('collapsed', style({
        'opacity': 1,
        transform: 'translateY(0px)',
      })),
      transition('void => normal', [
        style({
          'opacity': 1,
          transform: 'translateY(0px)',
        }),
        animate(300, keyframes([
          style({
            'opacity': 0,
            transform: 'translateY(-200px)',
            offset: 0
          }),
          style({
            'opacity': 0,
            transform: 'translateY(-5px)',
            offset: 0.1
          }),
          style({
            'opacity': 1,
            transform: 'translateY(0px)',
            offset: 1
          })
        ]))]),
        transition('void => collapsed', [
          style({
            'opacity': 0,
            transform: 'translateY(100px)',
          }),
          animate(300)]),
        ])
      ]
    })
    export class InfoboxComponent {
  ChevronDown = faChevronDown;
  ChevronUp = faChevronUp;
  Cross = faClose;

  collapsed = true;
  infoBox = true;
  state = 'collapsed';
  @Input() title: string = null;
  @Input() content: {desc: string, list: string[]} = null;


  collapse() {
    this.state == 'collapsed'
  }
  open() {
    this.state == 'normal'
  }

  close() {
    this.infoBox = false;
  }

  reset() {
    this.infoBox = true;
  }
  animatedBoxClick() {
    this.state == 'normal' ? this.state = 'collapsed': this.state = 'normal'
    this.collapsed = !this.collapsed;
  }
}
