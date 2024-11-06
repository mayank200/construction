import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Get Started with Your Construction Project Today'
  @Input()
  content1: string =
    'Contact us now to begin your construction journey with a team of experts dedicated to bringing your vision to life.'
  @Input()
  action1: string = 'Contact Us'
  constructor() {}
}
