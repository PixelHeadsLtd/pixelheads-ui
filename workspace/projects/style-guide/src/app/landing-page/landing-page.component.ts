import { Component, HostListener, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { ToggleService } from '../../services/toggle-service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements AfterContentChecked {

  isSticky: boolean = false;
  showSearch: boolean = false;
  showSearchResults: boolean = false;
  inputValue: string = '';
  searchText = '';
  rotateIcon: boolean = false;
  showOverlay: boolean = false;
  showLeftNav: boolean = false;
  showHeading: boolean = false;
  showBlade: boolean = false;
  bladeHeading: string = '';
  showReleaseNotes: boolean = false;
  showDesignPrinciples: boolean = false;
  showSupportedBrowsers: boolean = false;

  chrome = "./assets/images/browsers/chrome.png"
  firefox = "./assets/images/browsers/firefox.png"
  edge = "./assets/images/browsers/edge.png"
  safari = "./assets/images/browsers/safari.png"
  ios = "./assets/images/browsers/ios.png"
  android = "./assets/images/browsers/android.png"

  public constructor(
    private changeDetector: ChangeDetectorRef,
    private service: ToggleService
  ) { }

  public activeTab?: TabNavigationItemComponent;

  public toggleBlade: boolean = false;

  tabsNgTemplate = [
    {
      tabId: 'tab1',
      tabName: 'Angular 17',
      enableIcons: true,
      iconName: 'check_circle',
      iconColour: 'aa-green-100',
      tabDisabled: false,
      showRightDivider: false,
      enableClose: false,
      showTabOneContent: true,
      closeColour: ''
    },
    {
      tabName: 'Legacy Angular 11',
      enableIcons: true,
      iconName: 'elderly_woman',
      iconColour: 'aa-red-100',
      tabDisabled: false,
      showRightDivider: false,
      enableClose: false,
      showTabTwoContent: true,
      closeColour: ''
    }
  ]

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 350;
  }

  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }

  openAnimationsNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(0);
    console.log("Well something happened so....");
  }

  openElementsNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(1);
  }

  openLayoutNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(2);
  }

  openNavigationNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(3);
  }

  openPatternsNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(4);
  }

  openWidgetsNav() {
    this.showSearch = !this.showSearch;
    this.service.updateIndex.next(5);
  }

  goToPageTemplatesNav() {
    this.showSearch = false;
    this.service.updateIndex.next(9);
  }

  tourCount: number | null | undefined;

  incrementTourCount() {
    // if(this.tourCount) {
    //   this.tourCount++;
    // } else {
    //   this.tourCount = 0
    // }
  }

  setTourCount(step: number | null) {
    this.tourCount = step;
    this.toggleBlade = false;
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
