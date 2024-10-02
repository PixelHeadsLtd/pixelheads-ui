import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  cardView: boolean = true;
  cardViewLarge: boolean = false;
  listView: boolean = false;
  imgPath1 = "./assets/images/samples/darth.png";
  imgPath2 = "./assets/images/samples/obi-wan.png";
  imgPath3 = "./assets/images/samples/yoda.png";
  imgPath4 = "./assets/images/samples/luke.png";
  showCard: boolean = false;
  showCardOptional: boolean = false;
  showCardMini: boolean = false;
  showAvatar: boolean = false;
  showCardList: boolean = false;
  showCardDetailed: boolean = false;
  toggleBlade: boolean = false;
  cardDescription: string = 'This is the card description, it must not exceed two lines, therefore we are truncating large descriptions';

  constructor() {}

  public onClick() {
    console.log('Hello I was clicked');
  }

  bladeIsOpen(open: boolean) {
    this.toggleBlade = open;
  }
}
