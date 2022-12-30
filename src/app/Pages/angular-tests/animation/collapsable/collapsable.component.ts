import { animation, state, style, trigger, transition, animate, group, query, animateChild, keyframes } from '@angular/animations';
import {  Component} from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css'],
  animations: [
    trigger('collapsable', [
      state('normal', style({

        'height': '200px',

        'opacity': 1
    })),
      state('collapsed', style({
        'height':'50px',
    })),
      transition('normal <=> collapsed', [
        group([
          query('@childanimation', animateChild()),
          animate(300)
        ]),
      ]),
      transition('void => collapsed', [
        style({
          'height': '200px',
        }),
        animate(0),
      ])
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
            transform: 'translateY(-100px)',
            offset: 0
          }),
          style({
            'opacity': 0,
            transform: 'translateY(-25px)',
            offset: 0.3
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
export class CollapsableComponent {
  ChevronDown = faChevronDown;
  ChevronUp = faChevronUp;
  Cross = faClose;

  collapsed2 = true;
  infoBox2 = true;
  state = 'collapsed';


  collapse() {
    this.state == 'collapsed'
  }
  open() {
    this.state == 'normal'
  }

  close2() {
    this.infoBox2 = false;
  }

  reset2() {
    this.infoBox2 = true;
  }
  animatedBoxClick() {
    this.state == 'normal' ? this.state = 'collapsed': this.state = 'normal'
    this.collapsed2 = !this.collapsed2;
  }
}
