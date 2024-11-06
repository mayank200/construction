import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html',
  styleUrls: ['hero.component.css'],
})
export class Hero {
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1607720146778-68d2d56fa38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image8Alt: string = 'Hero Image'
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1495036019936-220b29b930ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwNnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image6Alt: string = 'Hero Image'
  @Input()
  image11Src: string =
    'https://images.unsplash.com/photo-1509343256512-d77a5cb3791b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwN3w&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Alt: string = 'Hero Image'
  @Input()
  image1Alt: string = 'Construction site with workers'
  @Input()
  image7Src: string =
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image7Alt: string = 'Hero Image'
  @Input()
  image12Alt: string = 'Hero Image'
  @Input()
  image2Alt: string = 'Hero Image'
  @Input()
  image6Src: string =
    'https://images.unsplash.com/photo-1553895501-af9e282e7fc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image12Src: string =
    'https://images.unsplash.com/photo-1653974123177-fe9c05fb79e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image3Alt: string = 'Hero Image'
  @Input()
  image9Src: string =
    'https://images.unsplash.com/photo-1504687515379-dc34f9d74229?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image11Alt: string = 'Hero Image'
  @Input()
  action2: string = 'Learn More'
  @Input()
  action1: string = 'Get a Free Quote'
  @Input()
  image8Src: string =
    'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMwOXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image5Src: string =
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMxMHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image4Src: string =
    'https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMxMHw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image10Alt: string = 'Hero Image'
  @Input()
  image4Alt: string = 'Hero Image'
  @Input()
  heading1: string = 'Welcome to Our Construction Services'
  @Input()
  content1: string =
    'We are dedicated to providing top-quality construction services for all your needs. From residential to commercial projects, we have the expertise to bring your vision to life.'
  @Input()
  image10Src: string =
    'https://images.unsplash.com/photo-1575971637203-d6255d9947a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMxMXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image9Alt: string = 'Hero Image'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1512943746093-fb9ca381d87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMDM2NDMxMXw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
