import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  column2Title: string = 'Quick Links'
  @Input()
  link7: string = 'Blog'
  @Input()
  link5: string = 'About Us'
  @Input()
  link8: string = 'Careers'
  @Input()
  action1: string = 'Subscribe to Newsletter'
  @Input()
  content3: string = '© 2023 Company Name. All Rights Reserved.'
  @Input()
  link4: string = 'Contact Us'
  @Input()
  logoSrc: string =
    'https://presentation-website-assets.teleporthq.io/logos/logo.png'
  @Input()
  cookiesLink: string = '/cookies-policy'
  @Input()
  content2: string = 'Stay updated with our latest news and offers.'
  @Input()
  link9: string = 'Terms of Service'
  @Input()
  link6: string = 'FAQs'
  @Input()
  logoAlt: string = 'Company Logo'
  @Input()
  link1: string = 'Home'
  @Input()
  privacyLink: string = '/privacy-policy'
  @Input()
  link10: string = 'Privacy Policy'
  @Input()
  column1Title: string = 'Company'
  @Input()
  termsLink: string = '/terms-of-service'
  @Input()
  link3: string = 'Projects'
  @Input()
  link2: string = 'Services'
  @Input()
  socialLinkTitleCategory: string = 'Follow Us'
  constructor() {}
}
