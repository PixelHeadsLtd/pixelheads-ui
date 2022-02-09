import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-fancy',
  templateUrl: './accordion-fancy.component.html',
  styleUrls: ['./accordion-fancy.component.scss']
})
export class AccordionFancyComponent implements OnInit {
  
  showMore: boolean;
  
  constructor() { }
  
  accordionFancyHTML =
  `<div class="flex-group">
  <aa-dashboard-container 
    id="dashboardId1" 
    dashboardHeading="Commodities" 
    headerColor="bg-aa-lime-100"
  >
    <!-- new accordion -->
    <aa-accordion-fancy
      iconName="fas fa-user-cog aa-light-blue-100"
      id="accordionId1"
      itemTitle="Shipping"
    >
      <aa-dashboard-favourites-list
        (favClick)="onFavClick($event)"
        [isFavourite]="isFavourite"
        itemAnchor="This is a much longer favourite name to show how the truncation should work"
        itemAnchorTitle="Favourite title tag"
        itemDescription="This is a much longer description to show when the truncation begins"
        tagName="Gold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, CopperGold, Copper"
        lastViewed="20-04-2020"
        favouritesTitle="This is an example of the favourites title"
        favDescription="This is a very long description to show how the it would look within the fancy accordion. It appears when the user hovers over the small black icon on the right"
      >
      </aa-dashboard-favourites-list>
    </aa-accordion-fancy>
  </aa-dashboard-container>
</div>


// IF USING MATERIAL ICONS CHANGE aa-accordion-fancy SECTION TO THE BELOW
<aa-accordion-fancy
  [materialIcons]="true"
  iconName="local_fire_department"
  iconColour="aa-grey-100"
  id="accordionId1"
  itemTitle="The example uses material icons"
>`;

  isFavourite = false;

  public onFavClick(event: Event) {
    this.isFavourite=!this.isFavourite;
  }
  
  copyToClipboard(item): void {
    let listener = (e: ClipboardEvent) => {
        e.clipboardData.setData('text/plain', (item));
        e.preventDefault();
    };

    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);
  }
  
  toggleBlade: boolean;

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  ngOnInit() {
  }

}
