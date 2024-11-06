import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css'],
})
export class Navbar {
  @Input()
  link1: string = 'Home'
  @Input()
  link5: string = 'Contact Us'
  @Input()
  link2: string = 'Services'
  @Input()
  logoSrc: string =
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original'
  @Input()
  action2: string = '#services'
  @Input()
  logoAlt: string = 'Construction Company Logo'
  @Input()
  link3: string = 'Projects'
  @Input()
  action1: string = '#home'
  @Input()
  link4: string = 'About Us'
  constructor() {}
}
