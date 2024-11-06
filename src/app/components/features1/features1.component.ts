import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features1',
  templateUrl: 'features1.component.html',
  styleUrls: ['features1.component.css'],
})
export class Features1 {
  @Input()
  feature1ImgAlt: string = 'Construction worker with hard hat'
  @Input()
  feature3Description: string = 'High-quality materials used for construction'
  @Input()
  feature3Title: string = 'Quality Materials'
  @Input()
  feature3ImgSrc: string =
    'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImgSrc: string =
    'https://images.unsplash.com/photo-1498457349504-289ee698e52c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2Description: string = 'Experienced and skilled construction team'
  @Input()
  feature1Title: string = 'Safety First'
  @Input()
  feature3ImgAlt: string = 'Construction materials'
  @Input()
  feature1Description: string =
    'Ensuring safety measures are in place at all times'
  @Input()
  feature2ImgSrc: string =
    'https://images.unsplash.com/photo-1653971858526-97f2ba1914c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature2ImgAlt: string = 'Construction team working together'
  @Input()
  feature2Title: string = 'Skilled Team'
  activeTab: number = 0
  constructor() {}
}
