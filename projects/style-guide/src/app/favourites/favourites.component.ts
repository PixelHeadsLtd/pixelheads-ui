import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent {

  @Output() favClick = new EventEmitter();
  toggleBlade: boolean = false;
  showMore: boolean = false;
  isActiveTwo: boolean = false;
  toggleFavourite: boolean = false;
  clickAnchor: boolean = false;
  showFavourites: boolean = false;
  showDashboardFavourites: boolean = false;
  isFavourite: boolean = false;
  showFavHeading: boolean = false;

  constructor() { }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }

  onAnchorClick() {
    console.log("You clicked the anchor")
  }

  onFavClick(fav: any) {
    console.log("Favourite selected " + fav)
  }

  favsOriginLandscape = [
    {
      favColour: 'bg-ph-red-10',
      favLabel: 'BM',
      favTitle: 'Copper Anodes Chile Shipping',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAS | Copper Concentrate',
      favTextLineThree: '',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-green-15',
      favLabel: 'BM',
      favTitle: 'Cu Concs AAML Schedule',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAML.Cu | Copper Concentrate',
      favTextLineThree: '',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-orange-10',
      favLabel: 'BM',
      favTitle: 'Copper Anodes Chile Shipping',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAL.CuA | Copper Concentrate',
      favTextLineThree: '',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-light-blue-15',
      favLabel: 'BM',
      favTitle: 'Ni Booking Control',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'IO.AMML_Ni | Nickel',
      favTextLineThree: '',
      isFavourite: false
    }
  ];

  favsOriginPortrait = [
    {
      favColour: 'bg-ph-red-10',
      favLabel: 'BM',
      favTitle: 'Copper Anodes Chile Shipping',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAS',
      favTextLineThree: 'Copper Concentrate',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-green-15',
      favLabel: 'BM',
      favTitle: 'Cu Concs AAML Schedule',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAML.Cu',
      favTextLineThree: 'Copper Concentrate',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-orange-10',
      favLabel: 'BM',
      favTitle: 'Copper Anodes Chile Shipping',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'BM.AAL.CuA',
      favTextLineThree: 'Copper Concentrate',
      isFavourite: false
    },
    {
      favColour: 'bg-ph-light-blue-15',
      favLabel: 'BM',
      favTitle: 'Ni Booking Control',
      favTextLineOne: 'Base Metals',
      favTextLineTwo: 'IO.AMML_Ni',
      favTextLineThree: 'Nickel',
      isFavourite: false
    }
  ];

  dashBoardFavourites = [
    {
      materialIcons: false,
      favIconClass: 'fas fa-ring ph-ochre-100',
      iconColour: '', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    },
    {
      materialIcons: true,
      favIconClass: 'attach_money',
      iconColour: 'ph-green-100', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    },
    {
      materialIcons: false,
      favIconClass: 'fas fa-chess-rook ph-plum-100',
      iconColour: '', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    },
    {
      materialIcons: false,
      favIconClass: 'fas fa-piggy-bank ph-pink-100',
      iconColour: '', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    },
    {
      materialIcons: false,
      favIconClass: 'fas fa-fire ph-burgundy-100',
      iconColour: '', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    },
    {
      materialIcons: false,
      favIconClass: 'fa-solid fa-hotel ph-light-blue-100',
      iconColour: '', // material-icons only
      tagName: 'Gold, Copper',
      favouritesTitle: 'BM.AAS | Copper Concentrate',
      favDescription: 'Copper Anodes Chile Shipping',
      lastViewed: '20 Apr 2020',
      isFavourite: false
    }
  ];
}


