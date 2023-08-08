import { Component, OnInit, HostListener, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { TabNavigationItemComponent } from '@angloamerican/components';
import { TabData } from '../class/tab-data';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { OpenLeftNavService } from './left-nav-service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterContentChecked  {
  
  isSticky: boolean = false;
  showSearch: boolean;
  showSearchResults: boolean;
  inputValue: string;
  searchText = '';
  rotateIcon: boolean;
  showOverlay: boolean;
  showEmailTemplates: boolean;
  bladeHeading: string;
  openPageBuilder: boolean;
  showLeftNav: boolean;
  showIconPicker: boolean;
  toggleDataType: boolean;
  showHeaderPicker: boolean;
  showHeading: boolean;
  showBlade: boolean;
  showReleaseNotes: boolean;
  showDesignPrinciples: boolean;
  showSupportedBrowsers: boolean;
  selectedColor = 'aa-light-blue-100';
  showFlagFinder: boolean;
  
  stepOne = "./assets/images/samples/email-templates/step1.png";
  stepTwo = "./assets/images/samples/email-templates/step2.png";
  stepThree = "./assets/images/samples/email-templates/step3.png";
  stepFour = "./assets/images/samples/email-templates/step4.png";
  stepFive = "./assets/images/samples/email-templates/step5.png";
  stepSix = "./assets/images/samples/email-templates/step6.png";
  stepSeven = "./assets/images/samples/email-templates/step7.png";

  chrome="./assets/images/browsers/chrome.png"
  firefox="./assets/images/browsers/firefox.png"
  edge="./assets/images/browsers/edge.png"
  safari="./assets/images/browsers/safari.png"
  ios="./assets/images/browsers/ios.png"
  android="./assets/images/browsers/android.png"

  public constructor(
    private changeDetector: ChangeDetectorRef,
    private service: OpenLeftNavService
  ) {}
  
  public activeTab: TabNavigationItemComponent;

  public toggleBlade: boolean;

  flags = [
    'United Arab Emirate - ae',
    'Afghanistan - af',
    'Antigua & Barbuda - ag',
    'Anguilla - ai',
    'Albania - al',
    'Armenia - am',
    'Angola - ao',
    'Argentina - ar',
    'American Samoa	- as',
    'Austria - at',
    'Australia - au',
    'Aruba - aw',
    'Azerbaijan - az',
    'Bosnia & Herzegovina	- ba',
    'Barbados - bb',
    'Bangladesh - bd',
    'Belgium - be',
    'Burkina Faso	- bf',
    'Bulgaria - bg',
    'Bahrain - bh',
    'Burundi - bi',
    'Benin - bj',
    'Bermuda - bm',
    'Brunei Darussalam - bn',
    'Bolivia - bo',
    'Brazil - br',
    'Bahamas (the) - bs',
    'Bhutan - bt',
    'Botswana - bw',
    'Belarus - by',
    'Belize - bz',
    'Canada - ca',
    'Congo (the Dem Rep of the) - cd',
    'Central African Rep (the) - cf',
    'Switzerland - ch',
    'Côte d`Ivoire- ci',
    'Cook Islands (the)	- ck',
    'Chile - cl',
    'Cameroon - cm',
    'China - cn',
    'Colombia - co',
    'Costa Rica	- cr',
    'Cuba - cu',
    'Cabo Verde	- cv',
    'Cyprus - cy',
    'Czechia - cz',
    'Germany - de',
    'Djibouti - dj',
    'Denmark - dk',
    'Dominica - dm',
    'Dominican Rep (the)	- do',
    'Algeria - dz',
    'Ecuador - ec',
    'Estonia - ee',
    'Egypt - eg',
    'Eritrea - er',
    'Spain - es',
    'Ethiopia - et',
    'Finland - fi',
    'Fiji - fj',
    'Falkland Islands (the) [Malvinas] - fk',
    'Micronesia (Federated States of) - fm',
    'Faroe Islands (the) - fo',
    'France - fr',
    'Gabon - ga',
    'United Kingdom of GB & NI (the) - gb',
    'Grenada - gd',
    'Georgia - ge',
    'Ghana - gh',
    'Gibraltar - gi',
    'Greenland - gl',
    'Gambia (the)	- gm',
    'Guinea - gn',
    'Guadeloupe - gp',
    'Equatorial Guinea - gq',
    'Greece - gr',
    'Guam - gu',
    'Guinea-Bissau - gw',
    'Guyana - gy',
    'Hong Kong - hk',
    'Honduras - hn',
    'Croatia - hr',
    'Haiti - ht',
    'Hungary - hu',
    'Indonesia - id',
    'Ireland - ie',
    'Israel - il',
    'Isle of Man - im',
    'India - in',
    'Iraq - iq',
    'Iran (Islamic Rep of) - ir',
    'Italy - it',
    'Jamaica - jm',
    'Jordan - jo',
    'Japan - jp',
    'Kenya - ke',
    'Kyrgyzstan - kg',
    'Cambodia - kh',
    'Kiribati - ki',
    'Comoros (the) - km',
    'Saint Kitts & Nevis - kn',
    'Korea (the Democratic People`s Rep of) - kp',
    'Korea (the Rep of) - kr',
    'Kuwait - kw',
    'Cayman Islands (the) - ky',
    'Kazakhstan - kz',
    'Lao People`s Democratic Rep (the) - la',
    'Lebanon - lb',
    'Saint Lucia - lc',
    'Liechtenstein - li',
    'Sri Lanka - lk',
    'Liberia - lr',
    'Lesotho - ls',
    'Lithuania - lt',
    'Luxembourg - lu',
    'Latvia - lv',
    'Libya - ly',
    'Morocco - ma',
    'Monaco - mc',
    'Moldova (the Rep of) - md',
    'Montenegro - me',
    'Madagascar - mg',
    'Marshall Islands (the) - mh',
    'Rep of North Macedonia - mk',
    'Mali - ml',
    'Myanmar - mm',
    'Mongolia - mn',
    'Macao - mo',
    'Mauritania - mr',
    'Montserrat - ms',
    'Malta - mt',
    'Mauritius - mu',
    'Maldives - mv',
    'Malawi - mw',
    'Mexico - mx',
    'Malaysia - my',
    'Mozambique - mz',
    'Namibia - na',
    'New Caledonia - nc',
    'Niger (the) - ne',
    'Nigeria - ng',
    'Nicaragua - ni',
    'Netherlands (the) - nl',
    'Norway - no',
    'Nepal - np',
    'Nauru - nr',
    'New Zealand - nz',
    'Oman - om',
    'Panama - pa',
    'Peru - pe',
    'Philippines (the) - ph',
    'Pakistan - pk',
    'Poland - pl',
    'Puerto Rico - pr',
    'Palestine, State of - ps',
    'Palau - pw',
    'Paraguay - py',
    'Qatar - qa',
    'Romania - ro',
    'Serbia - rs',
    'Russian Federation (the) - ru',
    'Rwanda - rw',
    'Saudi Arabia - sa',
    'Solomon Islands - sb',
    'Seychelles - sc',
    'Sudan (the) - sd',
    'Sweden - se',
    'Singapore - sg',
    'Slovenia - si',
    'Slovakia - sk',
    'Slovenia - sl',
    'San Marino - sm',
    'Senegal - sn',
    'Somalia - so',
    'Suriname - sr',
    'South Sudan - ss',
    'Sao Tome & Principe - st',
    'El Salvador - sv',
    'Syrian Arab Rep - sy',
    'Eswatini - sz',
    'Turks & Caicos Islands (the) - tc',
    'Chad - td',
    'Togo - tg',
    'Thailand - th',
    'Tajikistan - tj',
    'Timor-Leste - tl',
    'Turkmenistan - tm',
    'Tunisia - tn',
    'Tonga - to',
    'Turkey - tr',
    'Trinidad & Tobago - tt',
    'Tuvalu - tv',
    'Taiwan (Province of China) - tw',
    'Tanzania, United Rep of - tz',
    'Ukraine - ua',
    'Uganda - ug',
    'United States of America (the) - us',
    'Uruguay - uy',
    'Uzbekistan - uz',
    'Saint Vincent & the Grenadines - vc',
    'Venezuela (Bolivarian Rep of) - ve',
    'Virgin Islands (British) - vg',
    'irgin Islands (U.S.) - vi',
    'Vietnam - vn',
    'Samoa - ws',
    'Vanuatu - vu',
    'Yemen - ye',
    'South Africa - za',
    'Zimbabwe - zw',
    'Zambia - zm'
  ];

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
  
  scrollToElement($element): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 350;
  }

  selectColor(event: any) {
    this.selectedColor = event.target.value;
    this.toggleDataType = false;
  }

  tabDataItems = [
    new TabData('orange', 'Total team', '60', '6/10', true, true, 'Some other text'),
    new TabData('green', 'Unchanged', '40', '4/10',  true, true, 'Some text for the tooltip'),
    new TabData('blue', 'Joiners', '60', '6/10',  true, true, 'Some text for the tooltip'),
    new TabData('red', 'Leavers', '80', '8/10',  true, true, 'Some text for the tooltip'),
    new TabData('light-blue', 'Movers', '90', '9/10', true, true, 'Some text for the tooltip'),
  ];
  
  myTabData = this.tabDataItems[0];
  
  tabChanged(tab: TabNavigationItemComponent) {
    this.activeTab = tab;
  }
  
  toggleSearchInput() {
    this.showSearch = ! this.showSearch;
    if(this.showSearch) {
      document.getElementById('search-text').focus();
    }
  }

  openAnimationsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(0);
    console.log("Well something happened so....");
  }

  openElementsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(1);
  }

  openLayoutNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(2);
  }

  openNavigationNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(3);
  }

  openPatternsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(4);
  }

  openWidgetsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(5);
  }

  openModifiersNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(6);
  }

  openTypographyNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(7);
  }

  openOtherWidgetsNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(8);
  }

  openEmailTemplatesNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(9);
  }

  openQandANav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(10);
  }

  openAddendumNav() {
    this.showSearch = ! this.showSearch;
    this.service.updateIndex.next(11);
  }

  searchAnimations = [
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-aa-red-100',
      link: 'loading-spinner',
    },
    {
      id: 'Animations',
      heading: 'Animations',
      icon: 'motion_photos_paused',
      iconColour: 'bg-aa-red-100',
      link: 'loading-spinner-page',
    }
  ]

  searchElements = [
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'anchor',
    },
    {
      id: 'ElementAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'buttons',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'checkbox',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'comments',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'field',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'fieldset',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'file-upload',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input-radio',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'select',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'slider',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'tables',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'input-textarea',
    },
    {
      id: 'ElementsAndInputs',
      heading: 'Elements and inputs',
      icon: 'check_box',
      iconColour: 'bg-aa-green-100',
      link: 'validation',
    }
  ]

  searchLayout = [
   {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade-bottom',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'blade-top',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'custom-wrapper',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'filter',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'flex',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'footer',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'header',
    },
    {
      id: 'Layout',
      heading: 'Layout',
      icon: 'dashboard',
      iconColour: 'bg-aa-blue-100',
      borderColour: 'bd-aa-light-blue-100',
      link: 'ui-block',
    }
  ]

  searchNavigation = [
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'context-menu',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'nav-context',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'progress-indicator',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'progress-indicator-lh',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'stepper',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'tab-navigation',
    },
    {
      id: 'Navigation',
      heading: 'Navigation',
      icon: 'menu_open',
      iconColour: 'bg-aa-orange-100',
      link: 'tree-menu',
    }
  ]

  searchPatterns = [
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'actions-summary',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'alerts',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'alert-shields',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'feature-box',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'colours',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'counter',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'icons',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'progress-bar',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'progress-circle',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'status-indicator',
    },
    {
      id: 'Patterns',
      heading: 'Patterns',
      icon: 'apps',
      iconColour: 'bg-aa-plum-100',
      link: 'tags',
    }
  ]

  searchWidgets = [
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'accordion',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'accordion-fancy',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'card',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'carousel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'favourites',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'icon-picker',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'info-panel',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'list-selectable',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'modal',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'overlay',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'popover',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'summary-top',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'toastr',
    },
    {
      id: 'Widgets',
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'tooltip',
    },
    {
      heading: 'Widgets',
      icon: 'touch_app',
      iconColour: 'bg-aa-light-blue-100',
      link: 'user-feedback',
    }
  ]

  searchModifiers = [
    {
      id: 'Modifiers',
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'border',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'border-radius',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'colours',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'margin',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'markup',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'misc',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'padding',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'text',
    },
    {
      heading: 'Modifiers',
      icon: 'auto_fix_off',
      iconColour: 'aa-green-50',
      link: 'widths',
    }
  ]

  searchTypography = [
    {
      id: 'Typography',
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'aa-green-50',
      link: 'editorial-content',
    },
    {
      heading: 'Typography',
      icon: 'text_fields',
      iconColour: 'aa-green-50',
      link: 'typography',
    }
  ]

  searchThirdPartyComponents = [
    {
      id: 'OtherWidgets',
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ag-grid',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngb-datepicker',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ng-select',
    },
    {
      heading: 'Third party components',
      icon: 'widgets',
      iconColour: 'aa-green-50',
      link: 'ngx-quill',
    }
  ]

  searchEmailTemplates = [
    {
      id: 'EmailTemplates',
      heading: 'Email templates',
      icon: 'attach_email',
      iconColour: 'aa-green-50',
      link: 'html-email',
    }
  ]

  searchQandAs = [
    {
      id: 'QAndA',
      heading: 'Q&A`s',
      icon: 'help_outline',
      iconColour: 'aa-green-50',
      link: 'questions-and-answers',
    }
  ]

  searchAddendum = [
    {
      id: 'Addendum',
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'elements-alignment',
    },
    {
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'page-layout-examples',
    },
    {
      heading: 'Addendum',
      icon: 'subject',
      iconColour: 'aa-green-50',
      link: 'unauthorised',
    }
  ]

  tourCount: number = null;

  incrementTourCount() {
    this.tourCount++;
  }
  
  setTourCount(step:number) {
    this.tourCount = step;
    this.toggleBlade = false;
  }

  componentMenu = [
    "control-bar",
    "blade-bottom",
    "filter",
    "table",
    "tab-navigation",
    "h2",
    "h2",
    "h2",
    "input",
    "input",
    "input",
    "input",
    "input",
    "select",
    "select",
    "select",
    "select",
    "select"
  ];

  pageTemplate = [];

  onDrop(event: CdkDragDrop<string []>) {
    if(event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  myRadios:boolean;
  filterInputs = [];
  bladeInputs = [];
  tableCellInputs = [];
  tableRowInputs = [];
  navItemsInputs = [];
  tabNavInputs = [];
  pickerIcons = [];
  // filter
  removeFilterInput(i) {
    this.filterInputs.splice(i);
  }
  addFilterInput(type:string) {
    this.filterInputs.push({input: "" , type });
  }
  // blade
  removeBladeInput(i) {
    this.bladeInputs.splice(i);
  }
  addBladeInput(type:string) {
    this.bladeInputs.push({input: "" , type });
  }
  // table cl
  removeTableCellInput(i) {
    this.tableCellInputs.splice(i);
  }
  addTableCellInput(type:string) {
    this.tableCellInputs.push({input: "" , type });
  }
  // table row
  removeTableRowInput(i) {
    this.tableRowInputs.splice(i);
  }
  addTableRowInput(type:string) {
    this.tableRowInputs.push({input: "" , type });
  }
  // nav items
  removeNavItemsInput(i) {
    this.navItemsInputs.splice(i);
  }
  addNavItemsInput(type:string) {
    this.navItemsInputs.push({input: "" , type });
  }
  // tab-navigation
  removeTabNavInputs(i) {
    this.tabNavInputs.splice(i);
  }
  addTabNavInputs(type:string) {
    this.tabNavInputs.push({input: "" , type });
  }

  savedFiles = [
    { id: 1, name: 'My saved file' },
    { id: 2, name: 'Another' },
    { id: 3, name: 'Mikes quick mock' },
    { id: 4, name: 'Mockup' },
    { id: 5, name: 'AMP screen' }
  ];

  selectedIndex: number;

  ngOnInit() {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

}
