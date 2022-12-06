import { animation, state, style, trigger, transition, animate } from '@angular/animations';
import {  Component} from '@angular/core';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'green',
        'content': 'test',
        transform: 'translateX(0)'
      })),
      state('collapsed', style({
        'background-color': 'yellow',
        transform: 'translateX(100px) scale(.5)'
        
      })),
      transition('normal <=> collapsed', animate(300))
    ])
  ]
})
export class AnimationComponent {
  ChevronDown = faChevronDown;
  ChevronUp = faChevronUp;
  Cross = faClose;

  collapsed = true;
  collapsed2 = true;
  infoBox = true;
  infoBox2 = true;
  state = 'normal';

  collapse() {
    this.collapsed = !this.collapsed;
  }
  collapse2() {
    this.collapsed2 = !this.collapsed2;
  }
  close() {
    this.infoBox = false;
  }
  close2() {
    this.infoBox2 = false;
  }
  reset() {
    this.infoBox = true;
  }
  reset2() {
    this.infoBox2 = true;
  }
  animatedBoxClick() {
    this.state == 'normal' ? this.state = 'collapsed': this.state = 'normal'

  }
}
