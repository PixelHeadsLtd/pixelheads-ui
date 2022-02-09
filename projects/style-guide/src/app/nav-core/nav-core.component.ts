import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, transition, style, animate, state } from '@angular/animations';
import { NavData } from '../class/nav-data';

@Component({
  selector: 'app-nav-core',
  templateUrl: './nav-core.component.html',
  styleUrls: ['./nav-core.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('active', style({})),
      state('inactive', style({ height: 0 })),
      transition('active => inactive', animate('300ms ease-in')),
      transition('inactive => active', animate('300ms ease-out'))
    ])
  ],
})
export class NavCoreComponent implements OnInit {
  
  minimizeMenu: boolean;
  @Input() menuItemClicked: boolean;
  selectedIndex: number = null;
  @ViewChild('nav', {read: ElementRef, static:false}) elementView: ElementRef;
  eleHeight: any;
  groupState: string;

  constructor() { }
  
  public toggleGroup() {
    this.groupState = this.groupState === 'inactive' ? 'active' : 'inactive';
  }
  
  navDataItems = [
    new NavData('bg-aa-red-100', 'motion_photos_paused', 'Animations'),
    new NavData('bg-aa-green-100', 'check_box', 'Elements and inputs'),
    new NavData('bg-aa-blue-100', 'dashboard', 'Layout'),
    new NavData('bg-aa-orange-100', 'menu_open', 'Navigation'),
    new NavData('bg-aa-plum-100', 'apps', 'Patterns'),
    new NavData('bg-aa-light-blue-100', 'touch_app', 'Widgets'),
  ];
  
  animations = [
    new NavData('', 'alternate_email', 'Loading spinner inline'),
    new NavData('', 'alternate_email', 'Loading spinner page'),
  ];

  navData = this.navDataItems[0];
  ani = this.animations[0];
  
  setIndex(index: number) {
    if(index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.groupState = this.groupState === 'inactive' ? 'active' : 'inactive';
     // this.eleHeight = this.elementView.nativeElement.offsetHeight;
    } else {
      this.selectedIndex = null;
     // this.eleHeight = 0;
    }
  }

  ngAfterViewInit() {
    this.eleHeight = (<HTMLElement>this.elementView.nativeElement).getBoundingClientRect().height;
  }
  
  ngOnInit(): void {
  }

}
